import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../services/api";
import { useUser } from "../UserProvider";

interface Children {
  children: ReactNode;
}

interface Address {
  district: string;
  zipCode: string;
  number: number;
  street: string;
  city: string;
}

interface Tickets {
  sold_amount: number;
  price: number;
  avaible_quantity: number;
}

interface EventData {
  id: number;
  title: string;
  owner_name: string;
  banner_url: string;
  image_url: string;
  is_remote: boolean;
  description: string;
  address: Address;
  tickets: Tickets;
}

interface EventProviderData {
  selectedEvent: EventData;
  allEvents: EventData[];

  getEventById: (id: string) => void;
  getEvents: () => void;
}

const EventContext = createContext<EventProviderData>({} as EventProviderData);

const useEvent = () => useContext(EventContext);

const EventProvider = ({ children }: Children) => {
  const { token, user } = useUser();

  const [allEvents, setAllEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData>(
    {} as EventData
  );

  const getEvents = async () => {
    const response = await api.get("/api/events");
    const data = response.data;
    setAllEvents(data);
  };

  const getEventById = async (id: string) => {
    const response = await api.get(`/api/events/${id}`, {
      headers: { Authorization: `token ${token}` },
    });
    const data = response.data;
    setSelectedEvent(data);
  };

  return (
    <EventContext.Provider
      value={{ getEvents, allEvents, getEventById, selectedEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { useEvent, EventProvider };
