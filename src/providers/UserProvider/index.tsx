import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  email: string;
  user_name: string;
  avatar_url: string;
  banner_url: string;
}

interface SighInCredentials {
  email: string;
  password: string;
}

interface SigNupCredentials {
  email: string;
  password: string;
  user_name: string;
  avatar_url: string;
  banner_url: string;
}

interface EditUserCredentials {
  user_name?: string;
  avatar_url?: string;
  banner_url?: string;
  email?: string;
}

interface UserContextData {
  user: User;
  token: string;
  signOut: () => void;
  signIn: (credentials: SighInCredentials) => Promise<void>;
  sigNup: (credentials: SigNupCredentials) => Promise<void>;
  EditUser: (credentials: EditUserCredentials) => Promise<void>;
  addEvent: (eventId: string) => Promise<void>;
  removeEvent: (eventId: string) => Promise<void>;
}

interface UserState {
  token: string;
  user: User;
  userId: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }: UserProviderProps) => {
  const [data, setData] = useState<UserState>(() => {
    const token = localStorage.getItem("@desafio:mb.labs:acessToken");
    const user = localStorage.getItem("@desafio:mb.labs:user");
    const userId = localStorage.getItem("@desafio:mb.labs:userId");

    if (token && user && userId) {
      return { token, user: JSON.parse(user), userId };
    }
    return {} as UserState;
  });

  const signIn = useCallback(async ({ email, password }: SighInCredentials) => {
    const responseToken = await api.post("/api/signin", { email, password });

    const { token } = responseToken.data;
    const decoded = jwt_decode<any>(token);

    const responseUser = await api.get("api/users", {
      headers: { Authorization: `token ${token}` },
    });

    const user = responseUser.data;
    const userId = decoded.id;

    localStorage.setItem("@desafio:mb.labs:user", JSON.stringify(user));
    localStorage.setItem("@desafio:mb.labs:acessToken", token);
    localStorage.setItem("@desafio:mb.labs:userId", userId);
    setData({ token, user, userId });
  }, []);

  const signOut = useCallback(() => {
    localStorage.clear();

    setData({} as UserState);
  }, []);

  const sigNup = useCallback(
    async ({
      user_name,
      email,
      password,
      avatar_url,
      banner_url,
    }: SigNupCredentials) => {
      await api.post("/api/signup", {
        user_name,
        email,
        password,
        avatar_url,
        banner_url,
      });
    },
    []
  );

  const EditUser = useCallback(
    async ({
      user_name,
      avatar_url,
      banner_url,
      email,
    }: EditUserCredentials) => {
      await api.patch(
        `/api/users/${localStorage.getItem("@desafio:mb.labs:userId")}`,
        { user_name, avatar_url, banner_url, email },
        {
          headers: { Authorization: `token ${data.token}` },
        }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const addEvent = useCallback(async (eventId: string) => {
    await api.patch(
      `/api/users/event/add/${eventId}`,
      {},
      {
        headers: { Authorization: `token ${data.token}` },
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeEvent = useCallback(async (eventId: string) => {
    await api.patch(
      `/api/users/event/remove/${eventId}`,
      {},
      {
        headers: { Authorization: `token ${data.token}` },
      }
    );
    window.location.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        sigNup,
        EditUser,
        addEvent,
        removeEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
