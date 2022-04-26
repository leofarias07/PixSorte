/* eslint-disable prefer-template */
import { Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import CardSorteio from '../../components/CardSorteio';
import { Header } from '../../components/Header';
import { AuthContext } from '../../contexts/AuthContext';
import { useCan } from '../../hooks/useCan';
import { setupAPIClient } from '../../services/api';
import { api } from '../../services/apiClient';
import { withSSAuth } from '../../utils/withSSRAuth';

export default function DashboardUser() {
  const [cards, setCards] = useState([]);
  const [callApi, setCallApi] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const { user, isAuthenticated } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  });

  useEffect(() => {
    api
      .get('users/me')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        'user-uuid': localStorage.getItem('user_uuid')
      }
    };
    api
      .get('cards', config)
      .then(response => {
        setCards(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-alert
        alert('ops! ocorreu um erro' + err);
      })
      .finally(() => {
        setIsloading(false);
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
          <CardSorteio
            isLoading={isLoading}
            cards={cards}
            setCards={setCallApi}
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
export const getServerSideProps = withSSAuth(async ctx => {
  const apiClient = setupAPIClient(ctx);
  await apiClient.get('/users/me');

  return {
    props: {}
  };
});
