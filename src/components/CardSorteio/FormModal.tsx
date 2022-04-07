import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import api from '../../services/api';

export default function FormModal() {
  const [title, setTitle] = useState('');
  const [numberOfCards, setNumberOfCards] = useState<null | number>(null);
  const [unitPrice, setUnitPrice] = useState<null | number>(null);
  const [min, setMin] = useState<null | number>(null);
  const [max, setMax] = useState<null | number>(null);
  const [date, setDate] = useState<string | null>(null);
  const [amountRandomNumber, setAmountRandomNumber] =
    useState<null | number>(null);

  async function HandleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      number_of_cards: numberOfCards,
      unit_price: unitPrice,
      min,
      max,
      amount_random_number: amountRandomNumber,
      client_id: '33a3d3f5-c5e5-4cee-a19c-072c64e15b0d',
      date_sort: date
    };

    api
      .post('cards/generate', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Flex w={[350, 400, 500]} direction={['column']} gap="2">
      <FormControl onSubmit={HandleSubmit}>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="text" textColor="white">
            Titulo do sorteio
          </FormLabel>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />

          <FormLabel htmlFor="text" textColor="white">
            Numero de Cartelas
          </FormLabel>
          <Input
            id="number_of_cards"
            type="number"
            value={numberOfCards}
            onChange={e => {
              setNumberOfCards(+e.target.value);
            }}
          />

          <FormLabel htmlFor="text" textColor="white">
            Preço da Cartela
          </FormLabel>
          <Input
            id="unit_price"
            type="number"
            value={unitPrice}
            onChange={e => {
              setUnitPrice(+e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="text" textColor="white">
            Minino
          </FormLabel>

          <Input
            id="min"
            type="number"
            value={min}
            onChange={e => {
              setMin(+e.target.value);
            }}
          />

          <FormLabel htmlFor="text" textColor="white">
            Maximo
          </FormLabel>

          <Input
            id="max"
            type="number"
            value={max}
            onChange={e => {
              setMax(+e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="text" textColor="white">
            Quantidade de numeros por cartela
          </FormLabel>
          <Input
            id="amount_random_number"
            type="number"
            value={amountRandomNumber}
            onChange={e => {
              setAmountRandomNumber(+e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="text" textColor="white">
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
        <Button
          type="submit"
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          variant="solid"
        >
          Gerar Cartelas
        </Button>
      </FormControl>
    </Flex>
  );
}
