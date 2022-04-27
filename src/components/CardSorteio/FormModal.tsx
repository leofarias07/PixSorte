/* eslint-disable react/destructuring-assignment */
import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/apiClient';

type FormModalProps = {
  onClose: () => any;
};

export default function FormModal(props: FormModalProps) {
  const [title, setTitle] = useState('');
  const [numberOfCards, setNumberOfCards] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [date, setDate] = useState('');
  const [amountRandomNumber, setAmountRandomNumber] = useState('');

  async function HandleSubmit() {
    const data = {
      title,
      number_of_cards: +numberOfCards,
      unit_price: +unitPrice,
      min: +min,
      max: +max,
      amount_random_number: +amountRandomNumber,
      client_id: localStorage.getItem('user_uuid'),
      date_sort: date
    };
    const generateCard = async () =>
      api.post('cards/generate', data).then(() => {
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      });
    toast.promise(generateCard, {
      pending: {
        render() {
          props.onClose();
          return 'Gerando Cartelas';
        },
        icon: <CircularProgress size="20px" isIndeterminate color="green.300" />
      },
      success: {
        render() {
          return `Cartelas geradas`;
        },
        // other options
        icon: '🟢'
      },
      error: {
        render(error) {
          // When the promise reject, data will contains the error
          return `Erro: ${error.data.response.data}`;
        }
      }
    });
  }

  return (
    <>
      <Flex direction={['column', 'row']} gap="3" justify="space-between">
        <Flex w={[350, 400, 500]} direction={['column']} gap="2">
          <FormControl>
            <Flex gap="2" direction="column">
              <Input
                id="title"
                type="text"
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
                placeholder="Titulo do sorteio"
              />

              <Flex gap="3">
                <Input
                  id="number_of_cards"
                  type="number"
                  value={numberOfCards}
                  onChange={e => {
                    setNumberOfCards(e.target.value);
                  }}
                  placeholder="Numero de Cartelas"
                />
                <Input
                  id="unit_price"
                  type="number"
                  value={unitPrice}
                  onChange={e => {
                    setUnitPrice(e.target.value);
                  }}
                  placeholder="Preço da Cartela"
                />
              </Flex>
            </Flex>
            <Flex gap="2" mt="2">
              <Input
                id="min"
                type="number"
                value={min}
                onChange={e => {
                  setMin(e.target.value);
                }}
                placeholder="Minimo"
              />

              <Input
                id="max"
                type="number"
                value={max}
                onChange={e => {
                  setMax(e.target.value);
                }}
                placeholder="Maximo"
              />
              <Input
                id="amount_random_number"
                type="number"
                value={amountRandomNumber}
                onChange={e => {
                  setAmountRandomNumber(e.target.value);
                }}
                placeholder="Numeros por cartela"
              />
            </Flex>
            <Flex gap="2" direction="column" mt="2">
              <FormLabel htmlFor="date" textColor="white">
                Data para o sorteio
              </FormLabel>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={e => {
                  setDate(e.target.value);
                }}
              />
            </Flex>
            <Flex mt="2" justify="center">
              <Button
                w="100%"
                type="submit"
                leftIcon={<AddIcon />}
                colorScheme="yellow"
                variant="solid"
                onClick={HandleSubmit}
              >
                Gerar Cartelas
              </Button>
            </Flex>
          </FormControl>
        </Flex>

        <Flex
          w={[350, 400, 500]}
          p="2"
          justify="center"
          border="1px solid"
          borderColor="white"
          direction="column"
        >
          <Flex w="26" h="10" justify="center" alignItems="end">
            <Image src="/pixsortelogo.png" alt="pixsorte" />
          </Flex>
          <Grid h="200" templateColumns="repeat(4, 1fr)" gap="2">
            <GridItem colSpan={3}>
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={['10px', '18px']}
                mt="3"
              >
                NOSSO SORTEIO É FEITO AO VIVO <br /> NO NOSSO INSTAGRAN
                @PIXSORTE...
              </Text>
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={['10px', '18px']}
                mt="2"
              >
                AS 20:00 DE SEGUNDA Á SEXTA
              </Text>
              <Flex mt="10" gap="2">
                <Flex p="1" direction="column" justify="center" bg="green">
                  <Text
                    color="yellow"
                    fontWeight="bold"
                    fontSize={['6px', '10px']}
                    textAlign="center"
                  >
                    Valor do Bilhete
                  </Text>
                  <Text color="yellow" fontWeight="bold" textAlign="center">
                    2,50
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    textAlign="center"
                    color="white"
                    fontWeight="bold"
                    fontSize={['6px', '9px']}
                  >
                    O jogador paga R$ 2.50 e recebe um bilhete com 4 milhares{' '}
                    <br /> Caso alguma milhar seja sorteada o jogador recebe R$
                    600,00 <br /> Podendo acumular chegando até R$ 10.000,00{' '}
                    <br /> 0000.57
                  </Text>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem colSpan={1}>
              <Flex w="auto" direction="column" justify="center" gap="2">
                <Text
                  fontSize={['12px', '20px']}
                  fontWeight="bold"
                  textAlign="center"
                  color="white "
                  shadow="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('green.800', 'green.500')}
                  rounded="base"
                >
                  1234
                </Text>
                <Text
                  fontSize={['12px', '20px']}
                  fontWeight="bold"
                  textAlign="center"
                  color="white "
                  shadow="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('green.800', 'green.500')}
                  rounded="base"
                >
                  1234
                </Text>
                <Text
                  fontSize={['12px', '20px']}
                  fontWeight="bold"
                  textAlign="center"
                  color="white "
                  shadow="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('green.800', 'green.500')}
                  rounded="base"
                >
                  1234
                </Text>
                <Text
                  fontSize={['12px', '20px']}
                  fontWeight="bold"
                  textAlign="center"
                  color="white "
                  shadow="xl"
                  border="1px solid"
                  borderColor={useColorModeValue('green.800', 'green.500')}
                  rounded="base"
                >
                  1234
                </Text>

                <Text textAlign="center" fontWeight="bold" fontSize="12px">
                  Data <br /> 12/03/2022
                </Text>
              </Flex>
            </GridItem>
          </Grid>
          <Flex w="100%" bg="yellow">
            <Text fontSize={['9px', '14px']} fontWeight="bold">
              {' '}
              COMPRANDO PIX SORTE VOCÊ ESTARÁ AJUDANDO FAMÍLIAS CARENTE
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
