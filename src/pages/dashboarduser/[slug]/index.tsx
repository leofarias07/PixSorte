import { Flex } from '@chakra-ui/react';
import { Card } from '../../../components/Card';
import { HeaderUser } from '../../../components/HeaderUser';

export default function Cards() {
  return (
    <Flex direction="column" h="100vh">
      <HeaderUser />
      <Flex>
        <Card />
      </Flex>
    </Flex>
  );
}
