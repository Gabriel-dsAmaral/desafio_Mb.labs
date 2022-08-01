import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignupForm } from "./SignupForm";
import { useUser } from "../../../providers/UserProvider";

const signupSchema = yup.object().shape({
  name: yup.string().required("Precisamos do seu nome"),
  email: yup
    .string()
    .required("Must have a E-mail")
    .email("Esse e-mail é de outro mundo"),
  password: yup.string().required("Precisamos do seu codigo secreto"),
  confirm_password: yup
    .string()
    .required("Precisamos da confirmação do código secreto")
    .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
});

type SignupData = {
  [key: string]: string;
};

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Signup = ({ isOpen, onClose }: ModalCartProps) => {
  const toast = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { sigNup } = useUser();

  const handleSignup = ({
    name,
    email,
    password,
    avatar_url,
    banner_url,
  }: SignupData) => {
    sigNup({
      user_name: name,
      email,
      password,
      avatar_url,
      banner_url,
    })
      .then(() => onClose())
      .catch((err) =>
        toast({
          title: "Confira seus dados!!",
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

          <SignupForm
            handleSignup={handleSubmit(handleSignup)}
            register={register}
            errors={errors}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
