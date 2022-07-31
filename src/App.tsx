import { useUser } from "./providers/UserProvider";
import { useEvent } from "./providers/EventProvider";
import { useEffect } from "react";

export const App = () => {
  const { signIn, signOut, token, sigNup, EditUser, addEvent, removeEvent } =
    useUser();

  const { getEvents, allEvents, getEventById, selectedEvent } = useEvent();

  useEffect(() => {
    getEvents();
    getEventById("87e81810-fa30-4754-87bc-2a8964b83167");
  }, []);

  return (
    <>
      <button
        onClick={() => signIn({ email: "gabriell@mail.com", password: "1660" })}
      >
        login
      </button>
      <button onClick={() => signOut()}>logout</button>
      <button
        onClick={() =>
          sigNup({
            user_name: "Gabriel",
            email: "gabriell@mail.com",
            password: "1660",
            avatar_url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csVHl_EBoGPADSH-4tF2g6NFnhWKDp72MA&usqp=CAU",
            banner_url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2csVHl_EBoGPADSH-4tF2g6NFnhWKDp72MA&usqp=CAU",
          })
        }
      >
        registro
      </button>
      <button
        onClick={() =>
          EditUser({
            user_name: "mamaco",
          })
        }
      >
        registro
      </button>

      <button onClick={() => addEvent("a398efac-c2a5-47f6-ba8a-c3094215f2c6")}>
        add
      </button>
      <button
        onClick={() => removeEvent("a398efac-c2a5-47f6-ba8a-c3094215f2c6")}
      >
        remove
      </button>
      <button onClick={() => console.log(allEvents)}>log</button>
      <button onClick={() => console.log(selectedEvent)}>log2</button>
    </>
  );
};
