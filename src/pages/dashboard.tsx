import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';
import theme from '../styles/theme';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    tollbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.green[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  }
};
const series = [{ name: 'series1', data: [10, 20, 10, 34, 56, 3] }];
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={['6', '8']} bg="green.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={['6', '8']} bg="green.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa da Inscrição
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
