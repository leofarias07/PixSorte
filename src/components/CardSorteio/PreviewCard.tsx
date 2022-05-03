import {
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  Image
} from '@chakra-ui/react';

export default function PreviewCard() {
  return (
    <Flex
      w={[350, 400, 500]}
      p="2"
      justify="center"
      border="1px solid"
      borderColor="white"
      direction="column"
    >
      <Flex w="26" h="10" justify="center" alignItems="end">
        <Image src="/pixsortelogo.png" alt="pixsorte" />
      </Flex>
      <Grid h="200" templateColumns="repeat(4, 1fr)" gap="2">
        <GridItem colSpan={3}>
          <Text
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize={['10px', '18px']}
            mt="3"
          >
            NOSSO SORTEIO É FEITO AO VIVO <br /> NO NOSSO INSTAGRAN @PIXSORTE...
          </Text>
          <Text
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize={['10px', '18px']}
            mt="2"
          >
            AS 20:00 DE SEGUNDA Á SEXTA
          </Text>
          <Flex mt="10" gap="2">
            <Flex p="1" direction="column" justify="center" bg="green">
              <Text
                color="yellow"
                fontWeight="bold"
                fontSize={['6px', '10px']}
                textAlign="center"
              >
                Valor do Bilhete
              </Text>
              <Text color="yellow" fontWeight="bold" textAlign="center">
                2,50
              </Text>
            </Flex>
            <Flex>
              <Text
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize={['6px', '9px']}
              >
                O jogador paga R$ 2.50 e recebe um bilhete com 4 milhares <br />{' '}
                Caso alguma milhar seja sorteada o jogador recebe R$ 600,00{' '}
                <br /> Podendo acumular chegando até R$ 10.000,00 <br /> 0000.57
              </Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          <Flex w="auto" direction="column" justify="center" gap="2">
            <Text
              fontSize={['12px', '20px']}
              fontWeight="bold"
              textAlign="center"
              color="white "
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('green.800', 'green.500')}
              rounded="base"
            >
              1234
            </Text>
            <Text
              fontSize={['12px', '20px']}
              fontWeight="bold"
              textAlign="center"
              color="white "
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('green.800', 'green.500')}
              rounded="base"
            >
              1234
            </Text>
            <Text
              fontSize={['12px', '20px']}
              fontWeight="bold"
              textAlign="center"
              color="white "
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('green.800', 'green.500')}
              rounded="base"
            >
              1234
            </Text>
            <Text
              fontSize={['12px', '20px']}
              fontWeight="bold"
              textAlign="center"
              color="white "
              shadow="xl"
              border="1px solid"
              borderColor={useColorModeValue('green.800', 'green.500')}
              rounded="base"
            >
              1234
            </Text>

            <Text textAlign="center" fontWeight="bold" fontSize="12px">
              Data <br /> 12/03/2022
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Flex w="100%" bg="yellow">
        <Text fontSize={['9px', '14px']} fontWeight="bold">
          {' '}
          COMPRANDO PIX SORTE VOCÊ ESTARÁ AJUDANDO FAMÍLIAS CARENTE
        </Text>
      </Flex>
    </Flex>
  );
}
