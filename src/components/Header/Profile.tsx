import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  // eslint-disable-next-line react/require-default-props
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Farias</Text>
          <Text color="green.300" fontSize="small">
            leo.farias.05@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leonardo Farias"
        src="https://github.com/leofarias07.png"
      />
    </Flex>
  );
}
