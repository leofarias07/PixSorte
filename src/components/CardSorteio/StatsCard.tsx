/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Stack,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import React from 'react';

interface StatsCardProps {
  data: Date;
  status: string;
}
export function StatsCard(props: StatsCardProps) {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropContrast="90%"
      backdropBlur="5px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const { data, status } = props;
  const date = new Date(data);

  return (
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
          <Text fontSize="3xl">
            {' '}
            <Icon as={MdDateRange} fontSize="12" /> {date.toLocaleDateString()}
          </Text>
        </StatLabel>
        <StatLabel fontWeight="medium" isTruncated color="white">
          <Text>Premio: {status}</Text>
        </StatLabel>
      </Stack>
      <Flex>
        <>
          <Button
            mt="4"
            w="100%"
            colorScheme="yellow"
            variant="solid"
            onClick={() => {
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Saiba Mais
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
            {overlay}
            <ModalContent bg="green.900">
              <ModalHeader color="white">Sorteio 14/10/2022</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </Flex>
    </Stat>
  );
}
