import { Box, Button, Flex, Grid, Heading, VStack } from "@chakra-ui/react";

import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../Input";

interface SignInData {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
}

export const SignInForm = ({ handleSignIn, errors, register }: SignInData) => {
  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      margin="4"
      w="90%"
      textAlign="left"
      background="#FFFFFFFF"
    >
      <Flex width="100%">
        <Heading size="3">SignIn</Heading>
      </Flex>
      <VStack spacing="7" mt="5">
        <Box w="100%">
          <Input
            label="E-mail"
            error={errors.email}
            type="email"
            {...register("email")}
          />
        </Box>
        <Input
          label="Password"
          type="password"
          error={errors.password}
          {...register("password")}
        />

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
          Logar
        </Button>
      </VStack>
    </Grid>
  );
};
