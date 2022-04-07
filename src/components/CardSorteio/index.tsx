/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
// eslint-disable-next-line import/no-cycle
import BasicStatistics from './BasicStatistics';
import FormCard from './Modal';

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
  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 0, sm: 12, md: 17 }}>
      <Flex>
        <Box />
        <Spacer />
        <Box>
          <FormCard />
        </Box>
      </Flex>
      <BasicStatistics cards={props.cards} setCards={props.setCards} />
    </Box>
  );
}
