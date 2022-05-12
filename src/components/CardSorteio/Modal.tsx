/* eslint-disable import/no-cycle */
import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';
import FormModal from './FormModal';
import { CardsProps } from '.';

type FormCardProps = {
  cards: CardsProps[];
};

export default function FormCard({ cards }: FormCardProps) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropContrast="90%"
      backdropBlur="5px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        leftIcon={<AddIcon />}
        colorScheme="yellow"
        variant="solid"
        title={
          cards.some(card => card.status === null)
            ? 'Termine um sorteio que está pendente para poder criar outro'
            : 'Crie um Sorteio'
        }
      >
        Novo Sorteio
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
        {overlay}
        <ModalContent bg="green.900">
          <ModalHeader color="white">Cartela</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="space-between" direction={['column', 'row']} gap="2">
              <FormModal onClose={onClose} />
            </Flex>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
