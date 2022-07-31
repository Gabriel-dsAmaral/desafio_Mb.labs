import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { EventCardProfile } from "../../components/EventCardProfile";
import { ContainerEventCard } from "../../components/ContainerEventCard";

const event = {
  id: "87e81810-fa30-4754-87bc-2a8964b83167",
  title: "Podcast com os professores",
  owner_name: "Hogwarts",
  banner_url:
    "https://www.guarabiracenter.com.br/wp-content/uploads/2018/04/Home-Four-Banner-Background-Image-2.png",
  icon_url: "https://avatarfiles.alphacoders.com/715/71560.jpg",
  is_remote: false,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  address: {
    district: "Generic district",
    zipCode: "95780-000",
    number: 808,
    street: "Generic street",
    city: "Generic city",
  },
  tickets: {
    sold_amount: 0,
    price: 10,
    avaible_quantity: 999,
  },
};

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
      <ContainerEventCard />
    </Flex>
  );
};
