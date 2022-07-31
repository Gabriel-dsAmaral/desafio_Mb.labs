import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { ContainerEventCard } from "../../components/ContainerEventCard";
import { ContainerFilterCard } from "../../components/ContainerFilterCard";

export const Home = () => {
  return (
    <Flex
      top="10"
      minH="100vh"
      w="100%"
      backgroundColor="#FFFFFFFF"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Header />
      <Flex>
        <ContainerFilterCard />
        <ContainerEventCard />
      </Flex>
    </Flex>
  );
};
