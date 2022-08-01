import { Box, Flex } from "@chakra-ui/react";
import { FilterCard } from "../FilterCard";
import Populares from "../../assets/+Populares.svg";
import Ativos from "../../assets/Ativos.svg";
import Disponiveis from "../../assets/Disponiveis.svg";
import Esgotados from "../../assets/Esgotados.svg";
import Presenciais from "../../assets/Presenciais.svg";
import Remotos from "../../assets/Remotos.svg";
import Tudo from "../../assets/Tudo.svg";

export const ContainerFilterCard = () => {
  return (
    <Flex
      display={["none", "none", "flex", "flex"]}
      marginRight="15px"
      marginLeft="15px"
      border="1px solid #2359A9"
      borderRadius="10px"
      padding="12px"
      flexDirection="column"
      alignItems="center"
      maxWidth="240px"
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
        Filtragem
      </Box>
      <Flex display="inline-flex" justifyContent="space-around" flexWrap="wrap">
        <FilterCard image={Tudo} title="Todos"></FilterCard>
        <FilterCard image={Ativos} title="Ativos"></FilterCard>
        <FilterCard image={Populares} title="+Populares"></FilterCard>
        <FilterCard
          image={Disponiveis}
          title="Ingressos Disponiveis"
        ></FilterCard>
        <FilterCard image={Esgotados} title="Ingressos Esgotados"></FilterCard>
        <FilterCard image={Remotos} title="Remotos"></FilterCard>
        <FilterCard image={Presenciais} title="Presenciais"></FilterCard>
      </Flex>
    </Flex>
  );
};
