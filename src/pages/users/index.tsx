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
  Text
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/header';
import { SideBar } from '../../components/SideBar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="green.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="yellow"
              leftIcon={<Icon as={RiAddLine} fontSize="28" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>
                  <Checkbox colorScheme="yellow" />
                </Th>
                <Th color="white">Usuário</Th>
                <Th color="white">Data de Cadastro</Th>
                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
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
                <Td color="white">29 de Março de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    colorScheme="red"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Criar Novo
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
