import { Box, Flex, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, SimpleGrid } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Business Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
        <Stat>
          <StatLabel>Total Sales</StatLabel>
          <StatNumber>$350,897</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,670</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Customers</StatLabel>
          <StatNumber>1,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            17.25%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Profit Margin</StatLabel>
          <StatNumber>13.2%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            2.1%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaChartLine size={24} color="teal.500" />
            <Heading as="h2" size="lg" ml={2}>
              Sales Trend
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwaW5jcmVhc2luZyUyMHNhbGVzJTIwdHJlbmR8ZW58MHx8fHwxNzExMTc5NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales trend" />
        </Box>

        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaChartPie size={24} color="purple.500" />
            <Heading as="h2" size="lg" ml={2}>
              Revenue by Category
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydCUyMHNob3dpbmclMjByZXZlbnVlJTIwYnJlYWtkb3duJTIwYnklMjBjYXRlZ29yeXxlbnwwfHx8fDE3MTExNzk2Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue by category" />
        </Box>

        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaChartBar size={24} color="blue.500" />
            <Heading as="h2" size="lg" ml={2}>
              Monthly Revenue
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXIlMjBjaGFydCUyMHNob3dpbmclMjBtb250aGx5JTIwcmV2ZW51ZXxlbnwwfHx8fDE3MTExODAyNTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Monthly revenue" />
        </Box>

        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaUsers size={24} color="green.500" />
            <Heading as="h2" size="lg" ml={2}>
              New vs Returning Customers
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydCUyMHNob3dpbmclMjBuZXclMjB2cyUyMHJldHVybmluZyUyMGN1c3RvbWVyc3xlbnwwfHx8fDE3MTExODAyNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="New vs returning customers" />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
