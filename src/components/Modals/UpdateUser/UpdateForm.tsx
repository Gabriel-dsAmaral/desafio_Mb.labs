import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Box, Button, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { Input } from "../../Input";

interface SignupData {
  handleUpdate: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
}

export const UpdateForm = ({ handleUpdate, errors, register }: SignupData) => {
  return (
    <Grid
      onSubmit={handleUpdate}
      as="form"
      margin="4"
      w="90%"
      bg="white"
      textAlign="left"
      background="primary"
      color="grey.greyStone"
    >
      <Flex width="100%">
        <Heading size="3">Criar Conta</Heading>
      </Flex>
      <VStack spacing="7" mt="5">
        <Input label="Novo user name" {...register("user_name")} />

        <Box w="100%"></Box>

        <Button
          mt="10"
          bg="#1C1051"
          w="50%"
          margin="0 auto"
          color="white"
          h="40px"
          borderRadius="10px"
          _hover={{ bg: "#2359A9" }}
          type="submit"
        >
          Salvar
        </Button>
      </VStack>
    </Grid>
  );
};
