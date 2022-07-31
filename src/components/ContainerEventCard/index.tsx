import { Box, Flex } from "@chakra-ui/react";
import { EventCard } from "../EventCard";
import { useEffect } from "react";
import { useEvent } from "../../providers/EventProvider";

export const ContainerEventCard = () => {
  const { allEvents, getEvents } = useEvent();

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex
      border="1px solid #2359A9"
      borderRadius="10px"
      padding="12px"
      flexDirection="column"
      alignItems="center"
      maxWidth="985px"
      maxHeight="515px"
      overflowY="auto"
      overflowX="hidden"
    >
      <Box
        w="98%"
        backgroundColor="#190d4f"
        color="#ffffff"
        fontWeight="bold"
        fontFamily="sans-serif"
        padding="10px"
        fontSize="22px"
        borderRadius="10px"
        textAlign="center"
        marginBottom="8px"
      >
        Eventos
      </Box>
      <Flex display="inline-flex" justifyContent="space-around" flexWrap="wrap">
        {allEvents.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </Flex>
    </Flex>
  );
};
