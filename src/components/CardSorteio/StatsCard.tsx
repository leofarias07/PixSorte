/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Stack,
  Icon,
  Stat,
  StatLabel,
  useColorModeValue,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  HStack
} from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import React, { useState } from 'react';
import { SearchBox } from './SearchBox';

interface StatsCardProps {
  data: Date;
  status: string;
  card: {
    card_id: string;
    title: string;
    number_of_cards: number;
    unit_price: number;
    min: number;
    max: number;
    amount_random_number: number;
    values_sorted?: Array<number[]>;
    client_id: string;
    date_sort: Date;
  };
}
export function StatsCard(props: StatsCardProps) {
  const [cardFound, setCardFound] = useState([]);
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropContrast="90%"
      backdropBlur="5px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, status, card } = props;
  const date = new Date(data);

  console.log(cardFound);

  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('green.800', 'green.500')}
      rounded="lg"
    >
      <Stack spacing="4">
        <StatLabel fontWeight="medium" isTruncated color="white">
          <Text fontSize="5xl" align="center">
            <Icon as={MdDateRange} fontSize="4xl" /> {date.toLocaleDateString()}
          </Text>
        </StatLabel>
        <StatLabel fontWeight="medium" isTruncated color="white">
          <Text fontSize="2xl">Premio: {status}</Text>
        </StatLabel>
      </Stack>
      <Flex>
        <>
          <Button
            mt="4"
            w="100%"
            colorScheme="yellow"
            variant="solid"
            onClick={() => {
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Saiba Mais
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
            {overlay}
            <ModalContent bg="green.900">
              <ModalHeader color="white" fontSize="4xl" textAlign="center">
                Sorteio: {date.toLocaleDateString()}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex mb="4" justify="space-between">
                  <SearchBox
                    values={card.values_sorted}
                    setCardFound={setCardFound}
                    card_id={card.card_id}
                  />
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="bold"
                    py="5"
                    px="5"
                    shadow="xl"
                    border="1px solid"
                    borderColor={useColorModeValue('green.800', 'green.500')}
                    rounded="lg"
                  >
                    Numero Sorteado: {cardFound[2] || 'Não Existe'}
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  color="white"
                  fontSize="xl"
                  fontWeight="bold"
                  py="5"
                  px="5"
                  shadow="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('green.800', 'green.500')}
                  rounded="lg"
                >
                  <Stack>
                    <Text>Numero de Cartelas: {card.number_of_cards}</Text>
                    <Text color="white" fontSize="xl" fontWeight="bold">
                      Valor R$: {card.unit_price}
                    </Text>
                    <Text color="white" fontSize="xl" fontWeight="bold">
                      Range: {card.amount_random_number}
                    </Text>
                    <Flex>
                      <HStack>
                        <Text color="white" fontSize="xl" fontWeight="bold">
                          Min: {card.min}
                        </Text>
                        <Text color="white" fontSize="xl" fontWeight="bold">
                          Max: {card.max}
                        </Text>
                      </HStack>
                    </Flex>

                    <Text color="white" fontSize="xl" fontWeight="bold">
                      Numeros Sorteados: {cardFound[0]?.map(number => `${number} `)}
                    </Text>
                  </Stack>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Flex>
    </Stat>
  );
}
