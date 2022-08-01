import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";

import { SignInForm } from "./SignInForm";
import { useUser } from "../../../providers/UserProvider";

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Must have a E-mail")
    .email("Esse e-mail é de outro mundo"),
  password: yup.string().required("Precisamos do seu codigo secreto"),
});

type SignInData = {
  [key: string]: string;
};

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignIn = ({ isOpen, onClose }: ModalCartProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const toast = useToast();

  const { signIn } = useUser();

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ password: password, email: email })
      .then(() => window.location.reload())
      .catch((err) =>
        toast({
          title: "Senha/Email Errados!!",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
    reset();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="#ffffffff">
          <ModalCloseButton />

          <SignInForm
            handleSignIn={handleSubmit(handleSignIn)}
            register={register}
            errors={errors}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
