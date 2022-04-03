import {
  Flex,
  Icon,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue
} from '@chakra-ui/react';
import { BsCalendarRangeFill, BsCardText } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';

export function Card() {
  return (
    <Flex w="200px" px="10">
      <Stat
        px={{ base: 4, md: 8 }}
        py="5"
        shadow="xl"
        border="1px solid"
        borderColor={useColorModeValue('green.800', 'green.500')}
        rounded="lg"
      >
        <Stack spacing="4">
          <StatLabel fontWeight="medium" isTruncated color="white">
            <Icon as={MdDateRange} fontSize="12" /> asfasfasfsfafas
          </StatLabel>
          <StatLabel fontWeight="medium" isTruncated color="white">
            <Icon as={BsCalendarRangeFill} fontSize="12" /> asfasfasfsfafas
          </StatLabel>
          <StatNumber fontSize="1xl" fontWeight="medium" color="white">
            <Icon as={BsCardText} fontSize="15" /> asfasfasfsfafas
          </StatNumber>
        </Stack>
      </Stat>
    </Flex>
  );
}
