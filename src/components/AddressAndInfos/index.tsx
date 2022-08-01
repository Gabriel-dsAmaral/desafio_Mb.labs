import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvent } from "../../providers/EventProvider";
import { useUser } from "../../providers/UserProvider";

export const AddressAndInfos = () => {
  const { id } = useParams<{ id: string }>();

  const { addEvent } = useUser();

  const { selectedEvent } = useEvent();

  return (
    <Flex
      padding="10px"
      flexDirection="column"
      border="1px solid #2359A9"
      borderRadius="10px"
      w="300px"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        border="none"
        bg="#3C20B5"
        w="200px"
        h="50px"
        borderRadius="4px"
        boxShadow={"0px 2px 2px"}
        color="#FFFFFFFF"
        fontWeight="bold"
        fontSize="18px"
        onClick={() => addEvent(id)}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.01)",
        }}
      >
        Comprar Ingresso
      </Flex>
      <Box marginTop="5px" fontWeight="bold">
        Preço: R$:{selectedEvent.tickets.price},00
      </Box>
      <Box marginTop="5px" fontWeight="bold">
        Ingressos disponíveis: {selectedEvent.tickets.avaible_quantity}
      </Box>
      <Box marginTop="5px">
        O evento ocorrerá na cidade de {selectedEvent.address.city}, na rua{" "}
        {selectedEvent.address.street}, número {selectedEvent.address.number}
      </Box>
    </Flex>
  );
};
