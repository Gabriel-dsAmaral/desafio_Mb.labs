import { Box, Center, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { ContainerProfileEventCard } from "../../components/ContainerProfileEventCard";
import { Header } from "../../components/header";
import { useUser } from "../../providers/UserProvider";

export const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <Header />

      <Box
        background={`linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${user.banner_url})`}
        height="330px"
        width="100%"
        zIndex="1"
      />
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="center"
        marginTop="-170px"
      >
        <Flex
          width="80%"
          flexDirection={["column", "column", "column", "column"]}
          alignItems={["center", "center", "start", "start"]}
          justifyContent="start"
        >
          <Box mt="5px">
            <Center borderRadius="7px" h="205px" w="205px">
              <Image
                border="solid 3px"
                borderColor="gold.sand"
                marginBottom="7px"
                h="200px"
                w="200px"
                borderRadius="3px"
                src={user.avatar_url}
              />
            </Center>
          </Box>
          <Flex>
            <Text
              color="black"
              mr="12px"
              fontWeight="700"
              height={["40px", "40px", "54px", "54px"]}
              fontSize="36px"
              margin={"0px 15px 0px 25px"}
            >
              {user.user_name}
            </Text>
            <Center
              _hover={{
                cursor: "pointer",
                transform: "scale(1.01)",
              }}
              w={["40px", "40px", "152px", "152px"]}
              borderRadius="5px"
              position={["inherit", "inherit", "absolute", "absolute"]}
              top={["0px", "0px", "70px", "70px"]}
              right={["0px", "0px", "23px", "23px"]}
              margin-top={["4px", "4px", "0px", "0px"]}
              bgColor="#3C20B5"
              //   onClick={onModalOpen}
            >
              <Text
                color="black"
                display={["none", "none", "block", "block"]}
                marginLeft={["auto", "auto", "7px", "7px"]}
                fontWeight="600"
              >
                Editar perfil
              </Text>
              <IconButton
                _hover={{ bgColor: "#3C20B5" }}
                _focus={{ border: "none", bgColor: "#3C20B5" }}
                _active={{ bgColor: "#3C20B5" }}
                border="none"
                mr="8px"
                aria-label="supprimer"
                size="lg"
                bgColor="#3C20B5"
                icon={<FaEdit />}
              />
            </Center>
          </Flex>
        </Flex>
        <ContainerProfileEventCard />
        {/* <UserEdits isOpen={isModalOpen} onClose={onModalClose} /> */}
      </Flex>
    </>
  );
};
