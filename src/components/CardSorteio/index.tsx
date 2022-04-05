/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  HStack,
  FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';
// eslint-disable-next-line import/no-cycle
import BasicStatistics from './BasicStatistics';

export type CardsProps = {
  card_id: string;
  title: string;
  number_of_cards: number;
  unit_price: number;
  min: number;
  max: number;
  amount_random_number: number;
  values_sorted: Array<number[]>;
  client_id: string;
  date_sort: Date;
  status: string | null;
  sort_result: number | null;
};

export type CardArray = {
  cards: CardsProps[];
  setCards: (any) => void;
};

export default function CardSoteio(props: CardArray) {
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
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 0, sm: 12, md: 17 }}>
      <Flex>
        <Box />
        <Spacer />
        <Box>
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
                  <Flex justify="space-between">
                    <Flex>
                      <FormControl>
                        <Stack>
                          <InputGroup>
                            <InputLeftAddon children="N. Cartelas" />
                            <Input type="number" placeholder="Ex: 10" />
                            
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon children="R$" />
                            <Input
                              type="number"
                              placeholder="Ex: 2.50"
                              w="24"
                            />
                          </InputGroup>

                          <Flex>
                          <InputGroup>
                            <InputLeftAddon children="Min" />
                            <Input
                              type="number"
                              placeholder="Ex: 1000"
                              w="24"
                            />
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon children="Max" />
                            <Input
                              type="number"
                              placeholder="Ex: 9999"
                              w="24"
                            />
                          </InputGroup>
                          </Flex>
                        </Stack>
                      </FormControl>
                    </Flex>

                    <Flex
                      direction="column"
                      w="538px"
                      h="190px"
                      bgImage="url('/pixdasorte.png')"
                      bgRepeat="no-repeat"
                    >
                      <Flex direction="row" mt="12" ml="6">
                        <HStack>
                          <Text fontSize="13px" fontWeight="bold">
                            1234
                          </Text>
                          <Text fontSize="13px" fontWeight="bold">
                            1234
                          </Text>
                          <Text fontSize="13px" fontWeight="bold">
                            1234
                          </Text>
                          <Text fontSize="13px" fontWeight="bold">
                            1234
                          </Text>
                        </HStack>
                      </Flex>

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
        </Box>
      </Flex>
      <BasicStatistics cards={props.cards} setCards={props.setCards} />
    </Box>
  );
}
