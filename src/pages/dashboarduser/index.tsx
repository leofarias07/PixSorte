/* eslint-disable prefer-template */
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import CardSorteio from '../../components/CardSorteio';
import { Header } from '../../components/Header';
import api from '../../services/api';

export default function DashboardUser() {
  const [cards, setCards] = useState([]);
  const [callApi, setCallApi] = useState(0);

  const config = {
    headers: {
      'user-uuid': '33a3d3f5-c5e5-4cee-a19c-072c64e15b0d'
    }
  };
  useEffect(() => {
    api
      .get('cards', config)
      .then(response => {
        setCards(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert('ops! ocorreu um erro' + err);
      });
  }, [callApi]);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <CardSorteio cards={cards} setCards={setCallApi} />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
