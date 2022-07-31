import { Flex, Img, Text } from "@chakra-ui/react";

interface FilterCardProps {
  image: any;
  title: string;
}

export const FilterCard = ({ image, title }: FilterCardProps) => {
  return (
    <Flex
      marginTop="10px"
      backgroundColor="#ffffffff"
      border="2px solid #2359A9"
      borderRadius="7px"
      w="200px"
      h="50px"
      padding="10px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        marginLeft="5px"
        fontSize="21px"
        fontWeight="bold"
        fontFamily="sans-serif"
        color="#000000"
        maxWidth="112px"
      >
        {title}
      </Text>
      <Img marginTop="5px" w="65px" h="65px" src={image} />
    </Flex>
  );
};
