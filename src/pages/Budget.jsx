
import {   Container, Text, VStack, Box, Flex, Icon } from "@chakra-ui/react";

const Budget = () => {
  return (
    <Container
      maxW={['md', 'lg']}
      pt='4em'
    >
      <div>
        <Text fontSize='2.4em' fontWeight='600' display="block" 
          _hover={{
            color: [ "gray.600"]
          }}
        >
          Budget
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

            <Icon width={["5","7"]} height={["5","7"]} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#0466C8" fillOpacity="0.2"/>
              <path d="M6.05072 15V11.5406H5V10.5042H6.05072V9.4958H5V8.45938H6.05072V5H8.89493L10.308 8.45938H11.9565V5H13.9674V8.45938H15V9.4958H13.9674V10.5042H15V11.5406H13.9674V15H11.1051L9.6558 11.5406H8.06159V15H6.05072ZM7.98913 8.45938H8.49638L7.97101 7.11485H7.89855L7.98913 8.45938ZM8.06159 10.5042H9.25725L8.8587 9.4958H8.02536L8.06159 10.5042ZM11.1594 10.5042H11.9928L11.9565 9.4958H10.7428L11.1594 10.5042ZM12.0109 12.8151H12.1014L12.029 11.5406H11.5399L12.0109 12.8151Z" fill="#0466C8"/>
            </Icon>
            <Text fontSize={['.88em', '1.2em']} fontWeight='400' display="block" 
              _hover={{
                color: [ "gray.600"]
              }}
            >
              Monthly Budget
            </Text>

          </Flex>
          
        </Box>
        <Box borderRadius='xl' bg='white'>
          <Text fontSize={['1.7em', '2em']} fontWeight='800' display="block" 
            px='1em' py='.3em'
            _hover={{
              color: [ "gray.600"]
            }}
          >
            120,000
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Budget;
