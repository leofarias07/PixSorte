import { Box, Image } from '@chakra-ui/react';

import logo2 from '../../assets/logo2.png';

export function Logo() {
  return (
    <Box w="300px">
      <Image src={logo2} alt="Dan Abramov" />
    </Box>
  );
}
