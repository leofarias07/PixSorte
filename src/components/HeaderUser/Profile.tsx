import {
  Box,
  Flex,
  Text,
  Avatar,
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BiLogOut, BiUser } from 'react-icons/bi';
import { AiOutlineMail, AiFillHome } from 'react-icons/ai';
import { AuthContext, signOut } from '../../contexts/AuthContext';

interface ProfileProps {
  // eslint-disable-next-line react/require-default-props
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext);

  return (
    <Flex align="center">
      <Popover>
        <PopoverTrigger>
          <Box
            bg="green.500"
            py={0.5}
            px={0.5}
            ml={0.5}
            rounded="full"
            _hover={{ bg: 'green.600' }}
            _focus={{ boxShadow: 'outline' }}
            cursor="pointer"
          >
            <Avatar boxShadow="10px solid" size="md" name={user?.userName} />
          </Box>
        </PopoverTrigger>
        <Portal>
          <PopoverContent bg="green.700">
            <PopoverArrow />
            <PopoverHeader>
              {showProfileData && (
                <Flex alignItems="center" justify="center" gap="2">
                  <BiUser size={20} color="white" />
                  <Text fontSize="22" color="white">
                    {user?.userName}
                  </Text>
                </Flex>
              )}
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Flex
                alignItems="center"
                justify="center"
                gap="2"
                direction="row"
              >
                <AiOutlineMail size={20} color="white" />
                <Text color="white" fontSize="20" textAlign="center">
                  {user?.email}
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                justify="center"
                gap="2"
                direction="row"
              >
                <AiFillHome size={20} color="white" />
                <Text color="white" fontSize="20" textAlign="center">
                  {user?.enterpriseName}
                </Text>
              </Flex>
            </PopoverBody>
            <Button gap="2" onClick={signOut} colorScheme="red">
              <BiLogOut size={20} /> Sair da Plataforma
            </Button>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
