import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  // eslint-disable-next-line react/require-default-props
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  number
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="yellow"
        disabled
        _disabled={{
          bgColor: 'yellow.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="green.700"
      _hover={{
        bg: 'green.500'
      }}
    >
      {number}
    </Button>
  );
}
