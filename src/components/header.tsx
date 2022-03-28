import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="28"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        color="yellow"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        PIX SORTE
      </Text>

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

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="green.300"
          borderRightWidth={1}
          borderColor="green.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Leonardo Farias</Text>
            <Text color="green.300" fontSize="small" />
          </Box>

          <Avatar
            size="md"
            name="Leonardo Farias"
            src="https://github.com/leofarias07.png" 
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
