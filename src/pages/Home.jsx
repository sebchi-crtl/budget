
import {   Container, Text, VStack, Box, Flex, Icon, Input } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container
      maxW={['md', 'lg']}
      h="85vh"
      overflowY='scroll'
      py='4em'
    >
      <div>
        <Text fontSize='2.4em' fontWeight='600' display="block" 
          _hover={{
            color: [ "gray.600"]
          }}
        >
          Create new budget
        </Text>
      </div>
      <VStack 
      spacing={4}
      align='stretch'
      mt={10}
      >
        <Box>
          <Flex
            gap={[2, 3]}
            direction={["row"]}
            align="center"
          >

            
            <Text fontSize={['.9em', '1.2em']} fontWeight='300' display="block" 
              _hover={{
                color: [ "gray.600"]
              }}
            >
              How much would you like to spend on each category this month?
            </Text>

          </Flex>
          
        </Box>
        <Input variant='flushed' placeholder='Amount (in &#8358;)' />
        
      </VStack>

      <Text fontSize={['.8em']} fontWeight='300' display="block" mt='17rem' pb='2rem' align='center'
        _hover={{
          color: [ "gray.600"]
        }}
      >
        Please click on the budget page for the design
      </Text>
    </Container>
  );
};

export default Home;
