import { Flex, Img, Text } from "@chakra-ui/react";
import Fire from "../../assets/fire.gif";
import { useHistory } from "react-router-dom";

export const Logo = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <Flex
      bg="#3C20B5"
      w="155px"
      h="40px"
      borderRadius="15px"
      boxShadow={"0px 4px 4px"}
      alignItems="center"
      justifyContent="center"
      marginLeft="30px"
      onClick={() => goHome()}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.01)",
      }}
    >
      <Text
        fontSize="16px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
      >
        Fire on Events
      </Text>
      <Img
        marginLeft="5px"
        w="30px"
        h="30px"
        borderRadius="5px"
        src={Fire}
      ></Img>
    </Flex>
  );
};
