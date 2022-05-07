/* eslint-disable react/destructuring-assignment */
import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/apiClient';

type FormModalProps = {
  onClose: () => any;
};

export default function FormModal(props: FormModalProps) {
  const [title, setTitle] = useState('');
  const [numberOfCards, setNumberOfCards] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [range, setRange] = useState('Range dos números (padrão = milhar)');
  const [min, setMin] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);
  const [date, setDate] = useState('');
  const [amountRandomNumber, setAmountRandomNumber] = useState('1');

  type HandleSubmitErrorProps = {
    data: {
      response: {
        data: string;
      };
    };
  };

  function defineRange() {
    if (+amountRandomNumber === 0) {
      setAmountRandomNumber('1');
    }

    if (+numberOfCards * +amountRandomNumber <= 9) {
      setRange('unidade');
    } else if (+numberOfCards * +amountRandomNumber <= 99) {
      setRange('dezena');
    } else if (+numberOfCards * +amountRandomNumber <= 999) {
      setRange('centena');
    } else {
      setRange('milhar');
    }
  }

  useEffect(() => {
    defineRange();
  }, [numberOfCards, amountRandomNumber]);
  useEffect(() => {
    switch (range) {
      case 'unidade':
        setMin(1);
        setMax(9);
        break;
      case 'dezena':
        setMin(10);
        setMax(99);
        break;
      case 'centena':
        setMin(100);
        setMax(999);
        break;
      case 'milhar':
        setMin(1000);
        setMax(9999);
        break;
      default:
        setMin(1000);
        setMax(9999);
    }
  }, [range]);

  async function HandleSubmit() {
    const data = {
      title,
      number_of_cards: +numberOfCards,
      unit_price: +unitPrice,
      min,
      max,
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
        render(error: HandleSubmitErrorProps) {
          // When the promise reject, data will contains the error
          return `Erro: ${error.data.response.data}`;
        }
      }
    });
  }

  return (
    <>
      <Flex
        direction={['column', 'row']}
        gap="3"
        justifyContent="stretch"
        alignItems="stretch"
        w="full"
      >
        <Flex w={[350, 400, 'full']} direction={['column']} gap="2" flex={1}>
          <FormControl w="full" flex={1}>
            <Flex gap="2" direction="column">
              <Input
                id="title"
                type="text"
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
                placeholder="Titulo do sorteio"
                color="white"
              />

              <Flex gap="2">
                <Input
                  id="number_of_cards"
                  type="number"
                  value={numberOfCards}
                  onChange={e => {
                    setNumberOfCards(e.target.value);
                  }}
                  placeholder="Quantidade de Cartelas"
                  color="white"
                />
                {/* <Input
                  id="amount_random_number"
                  type="number"
                  value={amountRandomNumber}
                  onChange={e => {
                    setAmountRandomNumber(e.target.value);
                  }}
                  placeholder="Quant. de números aleatórios"
                /> */}
                <Select
                  placeholder="Quant. de números aleatórios"
                  color="black"
                  onChange={event => {
                    setAmountRandomNumber(event.currentTarget.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </Flex>
            </Flex>
            <Flex gap="2" mt="2">
              <Select
                placeholder={`Range: ${range}`}
                color="black"
                onChange={event => setRange(event.currentTarget.value)}
                isDisabled
              >
                <option value="unidade">Unidade (0 - 9)</option>
                <option value="dezena">Dezena (10 - 99)</option>
                <option value="centena">Centena (100 - 999)</option>
                <option value="milhar">Milhar (1000 - 999)</option>
              </Select>
              <Input
                id="unit_price"
                type="number"
                value={unitPrice}
                onChange={e => {
                  setUnitPrice(e.target.value);
                }}
                placeholder="Preço da Cartela"
                color="white"
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
                color="white"
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
                // eslint-disable-next-line react/jsx-no-bind
                onClick={HandleSubmit}
              >
                Gerar Cartelas
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
}
