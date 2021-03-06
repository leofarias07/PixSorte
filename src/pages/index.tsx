import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useContext } from 'react';

import { Input } from '../components/Form/Input';
import { Logo } from '../components/Header/Logo';
import { AuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    await signIn(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="green.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Flex ml="14" mt="5" mb="12">
          <Logo />
        </Flex>

        <Stack spacing="4" color="white">
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            _placeholder={{ color: 'green.500' }}
            error={formState.errors.email}
            {...register('email')}
            isRequired
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            _placeholder={{ color: 'green.500' }}
            error={formState.errors.password}
            {...register('password')}
            isRequired
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="yellow"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async () => ({
  props: {}
}));
