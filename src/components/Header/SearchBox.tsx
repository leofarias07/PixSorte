import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="green.200"
      position="relative"
      bg="green.800"
      borderRadius="full"
    >
      <Input
        color="green.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="buscar na plataforma"
        _placeholder={{ color: 'green.400' }}
      />
      <Icon as={RiSearchLine} fontSize="28" />
    </Flex>
  );
}
