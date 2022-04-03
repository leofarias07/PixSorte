/* eslint-disable prefer-template */
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import CardSorteio from '../../components/CardSorteio';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/Sidebar';
import api from '../../services/api';

export default function DashboardUser() {
  const [cards, setCards] = useState();
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
        console.log(response.data);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <CardSorteio cards={cards} />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
