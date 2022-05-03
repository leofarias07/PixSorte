import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { SideBar } from '../../components/Sidebar';
import { setupAPIClient } from '../../services/api';
import { withSSAuth } from '../../utils/withSSRAuth';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="green.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" color="white">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="yellow"
                leftIcon={<Icon as={RiAddLine} fontSize="28" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th p={['4', '4', '6']}>
                  <Checkbox colorScheme="yellow" />
                </Th>
                <Th color="white">Usuário</Th>
                {isWideVersion && <Th color="white">Data de Cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="yellow" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold" color="white">
                      Leonardo Farias
                    </Text>
                    <Text fontSize="small" color="green.300">
                      leo.farias.05@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td color="white">29 de Março de 2022</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
export const getServerSideProps = withSSAuth(
  async ctx => {
    const apiClient = setupAPIClient(ctx);
    await apiClient.get('/users/me');

    return {
      props: {}
    };
  },
  {
    permissions: ['sort.create'],
    roles: ['admin']
  }
);
