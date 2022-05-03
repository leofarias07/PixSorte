/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Text,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  CheckboxGroup,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  CircularProgress
} from '@chakra-ui/react';

import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';

import { SideBar } from '../../components/Sidebar';
import { setupAPIClient } from '../../services/api';
import { api } from '../../services/apiClient';
import { withSSAuth } from '../../utils/withSSRAuth';

type ToastError = {
  data: {
    message?: string;
  };
};

export default function CreateUser() {
  const [user_name, setUser_name] = useState('');
  const [enterprise_name, setUser_enterprise_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [permissions, setPermissions] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);

  async function HandleSubmit() {
    const createUser = async () => {
      if (password !== confirm_password) {
        throw new Error('Senhas não coincidem');
      }

      if (permissions.length === 0 || roles.length === 0) {
        throw new Error('Preencha Os campos de Permissões e Função');
      }

      api
        .post('users/register', {
          user_name,
          enterprise_name,
          email,
          password,
          permissions,
          roles
        })
        .then(() => {
          setTimeout(() => {
            Router.push('/users');
          }, 1000);
        });
    };

    toast.promise(createUser, {
      pending: {
        render() {
          return 'Criando usuário';
        },
        icon: <CircularProgress size="20px" isIndeterminate color="green.300" />
      },
      success: {
        render() {
          return `Usuário criado`;
        },
        // other options
        icon: '🟢'
      },
      error: {
        render(error: ToastError) {
          // When the promise reject, data will contains the error
          return `${error.data.message}`;
        }
      }
    });
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="green.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal" color="white">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="green.700" />

          <VStack spacing="8" color="white">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                placeholder="Nome da Empresa"
                value={enterprise_name}
                onChange={e => setUser_enterprise_name(e.target.value)}
                isRequired
              />
              <Input
                name="name"
                placeholder="Nome Completo"
                value={user_name}
                onChange={e => setUser_name(e.target.value)}
                isRequired
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                isRequired
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                isRequired
              />
              <Input
                name="confirm_password"
                type="password"
                placeholder="Confirmação da Senha"
                value={confirm_password}
                onChange={e => setConfirm_Password(e.target.value)}
                isRequired
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              {/* Permissions */}
              <Box>
                <Text
                  fontSize="xl"
                  color="white"
                  fontWeight="bold"
                  marginBottom="1rem"
                >
                  Permissões
                </Text>
                <CheckboxGroup
                  colorScheme="green"
                  onChange={(values: string[]) => {
                    setPermissions(values);
                  }}
                >
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value="sort.create" color="white">
                      Criar Sorteio
                    </Checkbox>
                    <Checkbox value="sort.read" color="white">
                      Ler Sorteio
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Box>
              {/* Roles */}
              <Box>
                <Text
                  fontSize="xl"
                  color="white"
                  fontWeight="bold"
                  marginBottom="1rem"
                >
                  Função
                </Text>

                <RadioGroup
                  onChange={(value: string) => {
                    setRoles([value]);
                  }}
                >
                  <Stack direction="row">
                    <Radio value="admin" color="white">
                      Admin
                    </Radio>
                    <Radio value="creator" color="white">
                      Creator
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="yellow" onClick={HandleSubmit}>
                Salvar
              </Button>
            </HStack>
          </Flex>
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
