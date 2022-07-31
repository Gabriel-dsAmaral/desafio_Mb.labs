import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

import { Logo } from "../logo";

export const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const history = useHistory();

  const { token, signOut, signIn } = useUser();

  const goUser = () => {
    history.push("/profile");
  };

  return (
    <Flex
      w="100%"
      bg="#3C20B5"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      position="absolute"
      top="0"
      left="0"
      zIndex="1"
    >
      <>
        <Logo />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap={["15px", "100px"]}
        >
          {!!token ? (
            <>
              <Text
                fontSize="16px"
                fontWeight="bold"
                fontFamily="sans-serif"
                color="#FFFFFFFF"
                onClick={() => signOut()}
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                }}
              >
                Deslogar
              </Text>
              <Text
                marginRight="30px"
                fontSize="16px"
                fontWeight="bold"
                fontFamily="sans-serif"
                color="#FFFFFFFF"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                }}
                onClick={() => goUser()}
              >
                Perfil
              </Text>
            </>
          ) : (
            <>
              <Text
                fontSize="16px"
                fontWeight="bold"
                fontFamily="sans-serif"
                color="#FFFFFFFF"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                }}
              >
                Registro
              </Text>
              <Text
                marginRight="30px"
                fontSize="16px"
                fontWeight="bold"
                fontFamily="sans-serif"
                color="#FFFFFFFF"
                onClick={() =>
                  signIn({ email: "gabriel@mail.com", password: "1660" })
                }
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.05)",
                }}
              >
                Login
              </Text>
            </>
          )}
        </Flex>
      </>
    </Flex>
  );
};
