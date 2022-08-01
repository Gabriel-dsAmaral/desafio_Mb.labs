import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";
import { SignIn } from "../Modals/SignIn";

import { Logo } from "../logo";
import { Signup } from "../Modals/Signup";

export const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const history = useHistory();

  const { token, signOut, signIn } = useUser();

  const goUser = () => {
    history.push("/profile");
  };

  const handleSingOut = () => {
    history.push("/");
    signOut();
  };

  const {
    isOpen: isModalSignInOpen,
    onOpen: onModalSignInOpen,
    onClose: onModalSignInClose,
  } = useDisclosure();

  const {
    isOpen: isModalSignupOpen,
    onOpen: onModalSignupOpen,
    onClose: onModalSignupClose,
  } = useDisclosure();

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

        <SignIn isOpen={isModalSignInOpen} onClose={onModalSignInClose} />
        <Signup isOpen={isModalSignupOpen} onClose={onModalSignupClose} />

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
                onClick={handleSingOut}
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
                onClick={onModalSignupOpen}
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
                onClick={onModalSignInOpen}
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
