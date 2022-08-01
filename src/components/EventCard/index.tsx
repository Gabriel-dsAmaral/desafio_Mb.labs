import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

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
  id: string;
  title: string;
  owner_name: string;
  banner_url: string;
  icon_url: string;
  is_remote: boolean;
  description: string;
  address: Address;
  tickets: Tickets;
}

interface EventCardProps {
  event: EventData;
}

export const EventCard = ({ event }: EventCardProps) => {
  const history = useHistory();

  const goToEvent = () => {
    history.push(`/event/${event.id}`);
  };

  return (
    <Flex
      margin="15px 5px 5px 5px"
      borderRadius="15px"
      boxShadow={"0px 2px 2px"}
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      minWidth="300px"
      h="400px"
    >
      <Img borderRadius="15px" w="100%" h="150px" src={event.icon_url} />
      <Text
        marginLeft="7px"
        fontSize="16px"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.title}
      </Text>
      <Text
        marginLeft="7px"
        fontSize="16px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.owner_name}
      </Text>
      <Text
        marginLeft="7px"
        fontSize="30px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.tickets.price > 0 ? `R$${event.tickets.price},00` : "Gratuito"}
      </Text>
      <Text
        marginLeft="7px"
        fontSize="16px"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.tickets.avaible_quantity === -777
          ? "Ingressos Ilimitados"
          : `Ingressos Restantes: ${event.tickets.avaible_quantity}`}
      </Text>
      <Text
        marginTop="5px"
        marginLeft="7px"
        fontSize="16px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.is_remote ? "Remoto" : "Presencial"}
      </Text>
      <Flex justifyContent="center" w="100%">
        <Button
          marginTop="15px"
          border="none"
          bg="#3C20B5"
          w="200px"
          h="50px"
          borderRadius="4px"
          boxShadow={"0px 2px 2px"}
          color="#FFFFFFFF"
          fontWeight="bold"
          fontSize="18px"
          onClick={() => goToEvent()}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.01)",
          }}
        >
          Mais Informações
        </Button>
      </Flex>
    </Flex>
  );
};
