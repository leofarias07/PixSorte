import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { Profile } from './Profile';
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from './Logo';

import { NotificationNav } from './NotificationNav';

export function HeaderUser() {
  const { onOpen } = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });
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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigatio"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
