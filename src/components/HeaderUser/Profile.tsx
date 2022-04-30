import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface ProfileProps {
  // eslint-disable-next-line react/require-default-props
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext);
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user.userName}</Text>
          <Text color="green.300" fontSize="small">
            {user.email}
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name={user.userName}
        src="https://github.com/leofarias07.png"
      />
    </Flex>
  );
}
