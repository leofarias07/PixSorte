import { Box, chakra, SimpleGrid } from '@chakra-ui/react';
// eslint-disable-next-line import/no-cycle
import { CardArray } from './index';
// eslint-disable-next-line import/no-cycle
import { StatsCard } from './StatsCard';

export default function BasicStatistics({ cards, setCards }: CardArray) {
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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 3, lg: 8 }}>
        {cards &&
          cards
            .sort((a, b) => {
              return +new Date(b.date_sort) - +new Date(a.date_sort);
            })
            .map(card => (
              <StatsCard
                key={card.card_id}
                data={card.date_sort}
                card={card}
                setCards={setCards}
              />
            ))}
      </SimpleGrid>
    </Box>
  );
}
