import React from 'react';
import './App.css';
import { Text, Stack, Box, Flex, Button, Link, SimpleGrid, Icon, Image } from "@chakra-ui/core";
import logo from './1.jpg';

function Home() {
  return (
    <Stack pt={5} mb={10} spacing={[20, null, 20]}>
      <Flex justify="center">
        <SimpleGrid w={['100%',null,'80%']} spacing="10px" columns={[1, null, 2]}>
          <Flex p={10} alignItems="center">
            <Stack alignItems="center" spacing={[5, 10]}>
              <Text fontSize="4xl" fontWeight="bold">Congress, relevant to you.</Text>
              <Text fontSize="lg" fontWeight="normal">Project Congress is a free tool to help you stay informed on what's happening in Congress based on your interests and location</Text>
              {/*<Link w={['100%', null, '50%']} style={{textDecoration:"none"}} href="https://app.projectcongress.com/signup/profile">
                <Button 
                  bg="purple.500"
                  height="60px"
                  color="white"
                  fontWeight="bold"
                  w="100%"
                  fontSize="xl">Get Started</Button>
              </Link>*/}
              <Flex 
                align="center"
                justify="center"
                borderColor="purple.500"
                borderWidth="1px"
                height="60px"
                w={['100%', null, '50%']}
                borderRadius="0.25rem">
                <Text fontSize="xl" color="purple.500" fontWeight="bold">Launching Soon 🇺🇸</Text>
              </Flex>
            </Stack>
          </Flex>
          <Flex justify="center">
            <Image h="600px" src={logo}/>
          </Flex>
        </SimpleGrid>
        
      </Flex>
      <Flex justify="center">
        <Box w={['100%', null, '60%']}>
          <SimpleGrid columns={[1, null, 2]} spacing={["20px",null,"50px"]}>
            <Stack p={10} bg="purple.50" align="center" spacing={6} borderRadius="0.25rem">
              <Icon name="lock" />
              <Text fontSize="xl" fontWeight="bold">Privacy First</Text>
              <Text fontSize="md" fontWeight="noraml">We don't share or sell your information with any 3rd party</Text>
            </Stack>
            <Stack p={10} bg="purple.50" align="center" spacing={6} borderRadius="0.25rem">
              <Icon name="info" />
              <Text fontSize="xl" fontWeight="bold">Personalized</Text>
              <Text fontSize="md" fontWeight="noraml">You'll only see relevant events in your feed based on your interests and location</Text>
            </Stack>
            <Stack p={10} bg="purple.50" align="center" spacing={6} borderRadius="0.25rem">
              <Icon name="view-off" />
              <Text fontSize="xl" fontWeight="bold">No Ads</Text>
              <Text fontSize="md" fontWeight="noraml">Free. Forever.</Text>
            </Stack>
            <Stack p={10} bg="purple.50" align="center" spacing={6} borderRadius="0.25rem">
              <Icon name="not-allowed" />
              <Text fontSize="xl" fontWeight="bold">No Trackers</Text>
              <Text fontSize="md" fontWeight="noraml">We don't use invasive trackers to monitor what you follow</Text>
            </Stack>
          </SimpleGrid>
        </Box>
      </Flex>
    </Stack>
    
  );
}

export default Home;
