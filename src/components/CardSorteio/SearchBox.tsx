/* eslint-disable react/destructuring-assignment */
import { Flex, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { api } from '../../services/apiClient';

interface SearchBoxProps {
  values: Array<number[]>;
  setCardFound: (any) => void;
  card_id: string;
  setCards: (any) => void;
  status: string;
}
export function SearchBox(props: SearchBoxProps) {
  const [numberSorted, setNumberSorted] = useState('');

  function sortedNumber(): void {
    let numberFound = props.values?.map((card, index) => {
      if (card.includes(+numberSorted)) {
        return [card, index];
      }

      return null;
    });

    numberFound = numberFound.filter(card => card !== null);

    if (numberFound.length !== 0) {
      numberFound[0]?.push(+numberSorted);
      props.setCardFound(numberFound[0]);

      api.put(`cards/update/${props.card_id}`, {
        new_status: 'Sorteado',
        value_sorted: numberFound[0][2]
      });

      // After update the database, i'm requiring the updated data
      props.setCards((value: number) => value + 1);
    } else {
      props.setCardFound([]);

      api.put(`cards/update/${props.card_id}`, {
        new_status: 'Acumulado'
      });

      // After update the database, i'm requiring the updated data
      props.setCards((value: number) => value + 1);
    }
  }
  return (
    <Flex
      as="label"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="green.200"
      position="relative"
      bg="green.800"
      opacity={props.status ? 0.5 : 1}
      borderRadius="full"
    >
      <Input
        color="green.50"
        variant="unstyled"
        px="4"
        mr="4"
        cursor={props.status ? 'not-allowed' : 'auto'}
        disabled={!!props.status}
        placeholder="Numero Sorteado"
        _placeholder={{ color: 'green.400' }}
        onChange={e => setNumberSorted(e.target.value)}
        value={numberSorted}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            sortedNumber();
          }
        }}
      />
      <Icon as={RiSearchLine} fontSize="28" />
    </Flex>
  );
}
