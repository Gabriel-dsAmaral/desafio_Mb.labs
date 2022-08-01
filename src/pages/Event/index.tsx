import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { AddressAndInfos } from "../../components/AddressAndInfos";
import { useEvent } from "../../providers/EventProvider";

export const Event = () => {
  const { id } = useParams<{ id: string }>();

  const [show, setShow] = useState(false);

  const { getEventById, selectedEvent } = useEvent();

  useEffect(() => {
    getEventById(id);
    setInterval(() => {
      setShow(true);
    }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <Header />
      <Flex
        marginTop="57px"
        background={`linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${selectedEvent.banner_url})`}
        height="240px"
        width="100%"
        zIndex="1"
        style={{ filter: "blur(2px)" }}
      />
      <Flex
        position="absolute"
        background={`linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${selectedEvent.banner_url})`}
        height="300px"
        width="80%"
        zIndex="1"
        margin="0 auto"
        top="61px"
        right="10%"
      />
      <Flex
        w="75%"
        justifyContent="space-between"
        flexDirection={["column", "column", "row-reverse", "row-reverse"]}
        marginTop="100px"
      >
        <Flex
          display={["flex", "flex", "none", "none"]}
          flexDir="column"
          justifyContent="start"
          w="100%"
        >
          <Text fontSize="30px" fontWeight="bold" fontFamily="sans-serif">
            {selectedEvent.title}
          </Text>
          <Text
            fontSize="22px"
            fontWeight="bold"
            fontFamily="sans-serif"
            color="#1C1051"
          >
            {selectedEvent.is_remote ? "Remoto" : "Presencial"}
          </Text>
          <Flex
            marginBottom="15px"
            marginTop="14px"
            flexDirection="column"
            maxWidth="300px"
            maxHeight="200px"
            border="1px solid #2359A9"
            borderRadius="10px"
            padding="12px"
            overflowY="auto"
          >
            <Text fontFamily="sans-serif" fontSize="18px" fontWeight="bold">
              Descrição do evento:
            </Text>
            <Text fontFamily="sans-serif" fontSize="16px">
              {selectedEvent.description}
            </Text>
          </Flex>
        </Flex>

        <Box marginLeft={["0", "0", "5px", "5px"]} marginBottom="15px">
          {show && <AddressAndInfos />}
        </Box>

        <Flex
          display={["none", "none", "flex", "flex"]}
          flexDir="column"
          justifyContent="start"
          w="100%"
        >
          <Text fontSize="30px" fontWeight="bold" fontFamily="sans-serif">
            {selectedEvent.title}
          </Text>
          <Text
            fontSize="22px"
            fontWeight="bold"
            fontFamily="sans-serif"
            color="#1C1051"
          >
            {selectedEvent.is_remote ? "Remoto" : "Presencial"}
          </Text>
          <Flex
            marginTop="14px"
            flexDirection="column"
            maxWidth="450px"
            maxHeight="200px"
            border="1px solid #2359A9"
            borderRadius="10px"
            padding="12px"
            overflowY="auto"
          >
            <Text fontFamily="sans-serif" fontSize="18px" fontWeight="bold">
              Descrição do evento:
            </Text>
            <Text fontFamily="sans-serif" fontSize="16px">
              {selectedEvent.description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
