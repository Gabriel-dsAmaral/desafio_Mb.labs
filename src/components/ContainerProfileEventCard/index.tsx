import { Box, Flex, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUser } from "../../providers/UserProvider";
import { EventCardProfile } from "../EventCardProfile";

export const ContainerProfileEventCard = () => {
  const { user, getMyUser } = useUser();

  const [haveEvents, setHaveEvents] = useState(
    user.my_events[0] === undefined ? false : true
  );

  useEffect(() => {
    getMyUser();
    setHaveEvents(user.my_events[0] === undefined ? false : true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      marginTop="10px"
      marginBottom="10px"
      border="1px solid #2359A9"
      borderRadius="10px"
      padding="12px"
      flexDirection="column"
      alignItems="center"
      maxWidth="985px"
      maxHeight="515px"
      minWidth={["0px", "0px", "495px", "985px"]}
      overflowY="auto"
      overflowX="hidden"
      onClick={() => console.log(haveEvents)}
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
        Meus Eventos
      </Box>
      <Flex display="inline-flex" justifyContent="space-around" flexWrap="wrap">
        {haveEvents ? (
          user.my_events.map((event) => {
            return <EventCardProfile key={event.id} event={event} />;
          })
        ) : (
          <Img
            w="300px"
            h="200px"
            border="1px solid gray"
            borderRadius="15px"
            src="https://c.tenor.com/XQLVLptLIBEAAAAM/maes-b-lost-in-a-field.gif"
          />
        )}
      </Flex>
    </Flex>
  );
};
