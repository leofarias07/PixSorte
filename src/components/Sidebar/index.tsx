import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react';
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContext';
import { SidebarNav } from './SidebarNav';

export function SideBar() {
  const { isOpen, onClose } = useSideBarDrawer();
  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="green.800" p="4">
            <DrawerCloseButton mt="6" />

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="48" mr="2" borderRight="2px" borderColor="white">
      <SidebarNav />
    </Box>
  );
}
