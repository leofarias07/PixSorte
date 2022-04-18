/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';

import { SideBar } from '../../components/Sidebar';
import apicards from '../../services/apicards';

export default function CreateUser() {
  const [user_name, setUser_name] = useState('');
  const [enterprise_name, setUser_enterprise_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');

  async function HandleSubmit() {
    apicards
      .post('users/register', {
        user_name,
        enterprise_name,
        email,
        password
      })
      .then(() => {
        alert('usuario criado com sucesso');
      })
      .catch(() => {
        alert('impossivel criar usuario');
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

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                placeholder="Nome da Empresa"
                value={enterprise_name}
                onChange={e => setUser_enterprise_name(e.target.value)}
              />
              <Input
                name="name"
                placeholder="Nome Completo"
                value={user_name}
                onChange={e => setUser_name(e.target.value)}
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Input
                name="confirm_password"
                type="password"
                placeholder="Confirmação da Senha"
                value={confirm_password}
                onChange={e => setConfirm_Password(e.target.value)}
              />
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
