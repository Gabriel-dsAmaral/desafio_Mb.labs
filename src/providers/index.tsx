import { ReactNode } from "react";
import { UserProvider } from "./UserProvider";
import { EventProvider } from "./EventProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <EventProvider>{children}</EventProvider>
    </UserProvider>
  );
};
