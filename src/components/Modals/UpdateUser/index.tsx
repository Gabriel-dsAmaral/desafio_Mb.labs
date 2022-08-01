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

import { UpdateForm } from "./UpdateForm";
import { useUser } from "../../../providers/UserProvider";

const updateSchema = yup.object().shape({
  user_name: yup.string(),
});

type UpdateData = {
  [key: string]: string;
};

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Update = ({ isOpen, onClose }: ModalCartProps) => {
  const toast = useToast();

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(updateSchema),
  });

  const { EditUser } = useUser();

  const handleUpdate = ({ user_name }: UpdateData) => {
    EditUser({
      user_name,
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

          <UpdateForm
            handleUpdate={handleSubmit(handleUpdate)}
            register={register}
            errors={errors}
          />
        </ModalContent>
      </Modal>
    </>
  );
};
