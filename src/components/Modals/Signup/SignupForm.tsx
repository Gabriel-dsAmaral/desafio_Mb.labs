import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Box, Button, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import { Input } from "../../Input";

interface SignupData {
  handleSignup: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
}

export const SignupForm = ({ handleSignup, errors, register }: SignupData) => {
  return (
    <Grid
      onSubmit={handleSignup}
      as="form"
      margin="4"
      w="90%"
      bg="white"
      textAlign="left"
      background="#ffffffff"
    >
      <Flex width="100%">
        <Heading size="3">Criar Conta</Heading>
      </Flex>
      <VStack spacing="3" mt="5">
        <Input label="Name" error={errors.name} {...register("name")} />
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
        <Input
          label="Confirm Password"
          type="password"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />
        <Input
          label="Avatar url"
          type="avatar_url"
          {...register("avatar_url")}
        />
        <Input
          label="Banner url"
          type="banner_url"
          {...register("banner_url")}
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
          Criar Conta
        </Button>
      </VStack>
    </Grid>
  );
};
