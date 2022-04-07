import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import api from '../../services/api';

export default function FormModal() {
  const [title, setTitle] = useState('');
  const [numberOfCards, setNumberOfCards] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [date, setDate] = useState('');
  const [amountRandomNumber, setAmountRandomNumber] = useState('');

  async function HandleSubmit() {
    const data = {
      title: title,
      number_of_cards: +numberOfCards,
      unit_price: +unitPrice,
      min: +min,
      max: +max,
      amount_random_number: +amountRandomNumber,
      client_id: '33a3d3f5-c5e5-4cee-a19c-072c64e15b0d',
      date_sort: date
    };

    api
      .post('cards/generate', data)
      .then(response => {
        alert('Cartelas Adicionadas');
        window.location.href = '/dashboarduser';
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    <Flex w={[350, 400, 500]} direction={['column']} gap="2">
      <FormControl>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="title" textColor="white">
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

          <FormLabel htmlFor="number_of_cards" textColor="white">
            Numero de Cartelas
          </FormLabel>
          <Input
            id="number_of_cards"
            type="number"
            value={numberOfCards}
            onChange={e => {
              setNumberOfCards(e.target.value);
            }}
          />

          <FormLabel htmlFor="unit_price" textColor="white">
            Preço da Cartela
          </FormLabel>
          <Input
            id="unit_price"
            type="number"
            value={unitPrice}
            onChange={e => {
              setUnitPrice(e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="min" textColor="white">
            Mínino
          </FormLabel>

          <Input
            id="min"
            type="number"
            value={min}
            onChange={e => {
              setMin(e.target.value);
            }}
          />

          <FormLabel htmlFor="max" textColor="white">
            Maximo
          </FormLabel>

          <Input
            id="max"
            type="number"
            value={max}
            onChange={e => {
              setMax(e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
          <FormLabel htmlFor="amount_random_number" textColor="white">
            Quantidade de numeros por cartela
          </FormLabel>
          <Input
            id="amount_random_number"
            type="number"
            value={amountRandomNumber}
            onChange={e => {
              setAmountRandomNumber(e.target.value);
            }}
          />
        </Flex>
        <Flex gap="2" direction="column">
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
        <Button
          type="submit"
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          variant="solid"
          onClick={HandleSubmit}
        >
          Gerar Cartelas
        </Button>
      </FormControl>
    </Flex>
  );
}
