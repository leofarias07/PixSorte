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
  useDisclosure,
  Text
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';
import FormModal from './FormModal';

export default function FormCard() {
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
      >
        Novo Sorteio
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
        {overlay}
        <ModalContent bg="green.900">
          <ModalHeader color="white">Cartela</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="space-between" direction={['column', 'row']} gap="2">
              <Flex>
                <FormModal />
              </Flex>

              <Flex
                direction="column"
                w={['350px', '538px']}
                h="190px"
                bgImage="url('/pixdasorte.png')"
                bgRepeat="no-repeat"
              >
                <Text fontSize="13px" fontWeight="bold" />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              colorScheme="yellow"
              variant="solid"
              leftIcon={<AddIcon />}
            >
              Gerar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
