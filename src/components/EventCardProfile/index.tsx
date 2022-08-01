import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

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

export const EventCardProfile = ({ event }: EventCardProps) => {
  const history = useHistory();

  const { removeEvent } = useUser();

  const goToEvent = () => {
    history.push(`/event/${event.id}`);
  };

  return (
    <Flex
      marginBottom="10px"
      marginRight="10px"
      borderRadius="15px"
      boxShadow={"0px 2px 2px"}
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      w="250px"
      h="300px"
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
        marginTop="-5px"
        marginLeft="7px"
        fontSize="16px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
      >
        {event.owner_name}
      </Text>

      <Flex
        align="center"
        flexDirection="column"
        justifyContent="center"
        w="100%"
      >
        <Button
          marginTop="10px"
          marginBottom="10px"
          border="none"
          bg="#3C20B5"
          w="180px"
          h="40px"
          borderRadius="4px"
          boxShadow={"0px 2px 2px"}
          color="#FFFFFFFF"
          fontWeight="bold"
          fontSize="16px"
          onClick={() => goToEvent()}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.01)",
          }}
        >
          Mais Informações
        </Button>

        <Button
          border="none"
          bg="#7B0126"
          w="180px"
          h="40px"
          borderRadius="4px"
          boxShadow={"0px 2px 2px"}
          color="#FFFFFFFF"
          fontWeight="bold"
          fontSize="16px"
          onClick={() => removeEvent(event.id)}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.01)",
          }}
        >
          Remover Evento
        </Button>
      </Flex>
    </Flex>
  );
};
