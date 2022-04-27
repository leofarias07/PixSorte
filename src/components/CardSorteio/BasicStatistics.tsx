/* eslint-disable no-nested-ternary */
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Spinner
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-cycle
import { CardArray } from './index';
// eslint-disable-next-line import/no-cycle
import { StatsCard } from './StatsCard';

export default function BasicStatistics({
  cards,
  setCards,
  isLoading
}: CardArray) {
  return (
    <Box
      minW={['330px', '6xl']}
      maxW="7xl"
      mx="auto"
      pt={1}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <chakra.h1
        textAlign="center"
        fontSize={['5xl', '6xl']}
        py={2}
        fontWeight="bold"
        color="white"
      >
        Sorteios
      </chakra.h1>
      {isLoading ? (
        <Flex h="100vh" w="100%" justify="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
        </Flex>
      ) : cards.length === 0 ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          bg="green.800"
        >
          <AlertTitle mt={4} mb={1} fontSize="4xl">
            Seja Bem Vindo
          </AlertTitle>
          <AlertDescription maxWidth="sm" fontSize="2xl" mt="2">
            Voçê ainda não tem nenhum sorteio, clique em novo sorteio.
          </AlertDescription>
        </Alert>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, lg: 8 }}>
          {cards &&
            cards
              .sort((a, b) => +new Date(b.date_sort) - +new Date(a.date_sort))
              .map(card => (
                <StatsCard
                  key={card.card_id}
                  date={card.date_sort}
                  card={card}
                  setCards={setCards}
                />
              ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
