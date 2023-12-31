

import {   Container, Text, VStack, Box, Flex, Icon } from "@chakra-ui/react";
import { TbCurrencyNaira } from "react-icons/tb";

const Budget = () => {
  return (
    <Container
      maxW={['md', 'lg']}
      maxH="85vh"
      overflowY='scroll'
      py='4em'
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
            <Text fontSize={['.9em', '1.2em']} fontWeight='300' display="block" 
              _hover={{
                color: [ "gray.600"]
              }}
            >
              Monthly Budget
            </Text>

          </Flex>
          
        </Box>
        <Box borderRadius='xl' bg='white'>
          <Text fontSize={['1.8em', '2em']} fontWeight='800' display="block" 
            justify='center'
            px='1em' py='.3em'
            _hover={{
              color: [ "gray.600"]
            }}
          >
            <Icon width="6" height="6" viewBox="0 1 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.05072 10V6.54062H0V5.5042H1.05072V4.4958H0V3.45938H1.05072V0H3.89493L5.30797 3.45938H6.95652V0H8.96739V3.45938H10V4.4958H8.96739V5.5042H10V6.54062H8.96739V10H6.10507L4.6558 6.54062H3.06159V10H1.05072ZM2.98913 3.45938H3.49638L2.97101 2.11485H2.89855L2.98913 3.45938ZM3.06159 5.5042H4.25725L3.8587 4.4958H3.02536L3.06159 5.5042ZM6.15942 5.5042H6.99275L6.95652 4.4958H5.74275L6.15942 5.5042ZM7.01087 7.81513H7.10145L7.02899 6.54062H6.53986L7.01087 7.81513Z" fill="currentColor"/>
            </Icon>120,000
          </Text>
        </Box>
      </VStack>

      <Box>
        <Flex
          direction={["row", "row"]}
          justify="space-between"
          mt={10}
        >
          <Box>
            <Flex
              direction={["row", "row"]}
              justify="space-between"
              gap={8}
            >
              <Text fontSize='.9em' fontWeight='600' display="block" 
                _hover={{
                  color: [ "gray.600"]
                }}
              >
                Last Month
              </Text>

              <Text fontSize='.9em' fontWeight='600' display="block" 
              color= "#0466C8"
              _hover={{
                color: [ "gray.600"]
              }}
            >
              This Month
              </Text>
            </Flex>
          </Box>

          <Icon width="8" height="5" viewBox="0 0 30 16" fill="none" >
            <circle cx="10.5" cy="8.5" r="1.5" fill="#707480"/>
            <circle cx="15.5" cy="8.5" r="1.5" fill="#707480"/>
            <circle cx="20.5" cy="8.5" r="1.5" fill="#707480"/>
          </Icon>
        </Flex>

        <VStack
        align='center'
        mt='4em'
        spacing={8}
        >
          <Icon width="150" height="150" viewBox="0 0 150 150" fill="none">
            <circle cx="75" cy="75" r="70" stroke="#0466C8" strokeOpacity="0.4" strokeWidth="10"/>
            <mask id="path-2-inside-1_1_39" fill="white">
            <path d="M75 12.6562C75 10.8441 76.4701 9.36644 78.28 9.45695C94.1376 10.25 109.214 16.7721 120.669 27.873C132.912 39.7368 140.057 55.8992 140.593 72.9387C141.128 89.9782 135.012 106.557 123.538 119.166C112.803 130.965 98.1655 138.421 82.3891 140.208C80.5884 140.412 79.0284 139.029 78.9146 137.221C78.8008 135.412 80.1768 133.863 81.9763 133.649C96.0506 131.975 109.096 125.287 118.684 114.75C129.011 103.402 134.515 88.4803 134.033 73.1448C133.551 57.8093 127.121 43.2631 116.102 32.5857C105.872 22.6715 92.4315 16.8152 78.2799 16.0286C76.4705 15.928 75 14.4684 75 12.6562Z"/>
            </mask>
            <path d="M75 12.6562C75 10.8441 76.4701 9.36644 78.28 9.45695C94.1376 10.25 109.214 16.7721 120.669 27.873C132.912 39.7368 140.057 55.8992 140.593 72.9387C141.128 89.9782 135.012 106.557 123.538 119.166C112.803 130.965 98.1655 138.421 82.3891 140.208C80.5884 140.412 79.0284 139.029 78.9146 137.221C78.8008 135.412 80.1768 133.863 81.9763 133.649C96.0506 131.975 109.096 125.287 118.684 114.75C129.011 103.402 134.515 88.4803 134.033 73.1448C133.551 57.8093 127.121 43.2631 116.102 32.5857C105.872 22.6715 92.4315 16.8152 78.2799 16.0286C76.4705 15.928 75 14.4684 75 12.6562Z" stroke="#0466C8" stroke-width="16" mask="url(#path-2-inside-1_1_39)"/>
            <path d="M40.152 82.996V77.812L49.98 64.636H56.1V78.748H59.952V82.996H56.1V88H51.204V82.996H40.152ZM51.204 78.748V69.82L44.544 78.748H51.204ZM61.6685 87.244L62.8925 83.248C64.0925 83.92 65.4725 84.256 67.0325 84.256C69.1925 84.256 70.9205 83.68 72.2165 82.528C73.5365 81.376 74.2805 79.744 74.4485 77.632C73.9445 78.4 73.2125 79.012 72.2525 79.468C71.3165 79.924 70.2485 80.152 69.0485 80.152C66.7925 80.152 64.8845 79.432 63.3245 77.992C61.7645 76.552 60.9845 74.656 60.9845 72.304C60.9845 69.904 61.8245 67.936 63.5045 66.4C65.2085 64.864 67.3565 64.096 69.9485 64.096C72.6365 64.096 74.8565 65.056 76.6085 66.976C78.3845 68.872 79.2725 71.596 79.2725 75.148C79.2725 79.396 78.2285 82.696 76.1405 85.048C74.0525 87.376 71.0285 88.54 67.0685 88.54C64.8605 88.54 63.0605 88.108 61.6685 87.244ZM72.6125 74.932C73.4045 74.212 73.8005 73.288 73.8005 72.16C73.8005 71.032 73.4045 70.108 72.6125 69.388C71.8445 68.668 70.8965 68.308 69.7685 68.308C68.6645 68.308 67.7165 68.668 66.9245 69.388C66.1565 70.108 65.7725 71.032 65.7725 72.16C65.7725 73.312 66.1565 74.248 66.9245 74.968C67.6925 75.664 68.6405 76.012 69.7685 76.012C70.8965 76.012 71.8445 75.652 72.6125 74.932ZM84.5096 70.144C84.5096 70.888 84.7376 71.5 85.1936 71.98C85.6496 72.436 86.2136 72.664 86.8856 72.664C87.5816 72.664 88.1456 72.436 88.5776 71.98C89.0336 71.5 89.2616 70.888 89.2616 70.144C89.2616 69.4 89.0336 68.8 88.5776 68.344C88.1456 67.888 87.5816 67.66 86.8856 67.66C86.2136 67.66 85.6496 67.9 85.1936 68.38C84.7376 68.836 84.5096 69.424 84.5096 70.144ZM82.6376 74.32C81.4856 73.168 80.9096 71.776 80.9096 70.144C80.9096 68.512 81.4976 67.12 82.6736 65.968C83.8496 64.816 85.2536 64.24 86.8856 64.24C88.5176 64.24 89.9216 64.816 91.0976 65.968C92.2976 67.12 92.8976 68.512 92.8976 70.144C92.8976 71.8 92.2976 73.192 91.0976 74.32C89.9216 75.448 88.5176 76.012 86.8856 76.012C85.2296 76.012 83.8136 75.448 82.6376 74.32ZM100.242 82.528C100.242 83.272 100.47 83.884 100.926 84.364C101.382 84.82 101.946 85.048 102.618 85.048C103.314 85.048 103.878 84.82 104.31 84.364C104.766 83.884 104.994 83.272 104.994 82.528C104.994 81.784 104.766 81.184 104.31 80.728C103.878 80.272 103.314 80.044 102.618 80.044C101.946 80.044 101.382 80.284 100.926 80.764C100.47 81.22 100.242 81.808 100.242 82.528ZM98.3696 86.704C97.2176 85.552 96.6416 84.16 96.6416 82.528C96.6416 80.896 97.2296 79.504 98.4056 78.352C99.5816 77.2 100.986 76.624 102.618 76.624C104.25 76.624 105.654 77.2 106.83 78.352C108.03 79.504 108.63 80.896 108.63 82.528C108.63 84.184 108.03 85.576 106.83 86.704C105.654 87.832 104.25 88.396 102.618 88.396C100.962 88.396 99.5456 87.832 98.3696 86.704ZM88.6136 88H84.4376L100.926 64.636H105.102L88.6136 88Z" fill="#0466C8"/>
          </Icon>

          <Flex
            direction={'column'}
            gap={1}
            align={'center'}
          >
            <Text fontSize={['.9em', '1.2em']} fontWeight='300' display="block" 
              _hover={{
                color: [ "gray.600"]
              }}
            >
              Amount spent so far
            </Text>
            <Flex>
              <Text fontSize={['1.1em', '1.8em']} fontWeight='300' display="block"
                color='#0466C8' 
                _hover={{
                  color: [ "gray.600"]
                }}
              >
                #50,000
              </Text>
              <Text fontSize={['1.1em', '1.8em']} fontWeight='300' display="block" 
                color='blue.300'
                _hover={{
                  color: [ "gray.600"]
                }}
              >
                /#120,000
              </Text>
            </Flex>
            

          </Flex>
        </VStack>
      </Box>

      <Box
        mt={10}
      >
        <Text fontSize={['1.1em', '1.8em']} fontWeight='500' display="block"
          color='#black' 
          _hover={{
            color: [ "gray.600"]
          }}
        >
          Category Breakdown
        </Text>
        <VStack
          bg='#FCFEFF'
          spacing={4}
          align='stretch'
          mt={8}
        >
          <Box>
            <Flex
              gap={[2, 3]}
              direction={["row"]}
              justify={'space-between'}
            >
              <Flex gap={3}>
                <Icon width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="23" fill="#F4E9CD"/>
                  <mask id="path-2-inside-1_1_77" fill="white">
                  <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z"/>
                  </mask>
                  <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z" stroke="#C89104" stroke-width="3" mask="url(#path-2-inside-1_1_77)"/>
                  <path d="M34.3166 31.7714H12V34.4H38.2857V31.7714H34.3166ZM36.9714 30.4571C36.6166 25.108 32.7 20.7314 27.5611 19.6669C27.6926 19.3514 27.7714 18.9966 27.7714 18.6286C27.7714 17.1829 26.5886 16 25.1429 16C23.6971 16 22.5143 17.1829 22.5143 18.6286C22.5143 18.9966 22.5931 19.3514 22.7246 19.6669C17.5857 20.7314 13.6691 25.108 13.3143 30.4571H36.9714ZM25.1429 22.0194C29.02 22.0194 32.332 24.4246 33.6857 27.8154H16.6C17.9537 24.4246 21.2657 22.0194 25.1429 22.0194Z" fill="#C89104"/>


                </Icon>
                <VStack
                  align={'left'}
                >
                  <Text fontSize={['.68em', '1em']} fontWeight='400' display="block" 
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    Food and Drink
                  </Text>
                  <Text fontSize={['.6em', '.9em']} fontWeight='300' display="block" 
                  align={'left'}
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    40%
                  </Text>
                </VStack>
                
              </Flex>
             

              <Flex
              
                align='center'
                justify='center'
              >
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.800' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>50,000/
                </Text>
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents" 
                  color='gray.400'
                  _hover={{
                    color: [ "gray.600"]
                  }}
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>42,000
                </Text>
              </Flex>
            </Flex>
            
          </Box>
          <Box>
            <Flex
              gap={[2, 3]}
              direction={["row"]}
              justify={'space-between'}
            >
              <Flex gap={3}>
                <Icon width="50" height="50" viewBox="0 0 48 48" fill="none">
                  <mask id="path-1-inside-1_0_1" fill="white">
                  <path d="M23 0C27.388 -5.2326e-08 31.6987 1.15492 35.4989 3.34871C39.2991 5.5425 42.4549 8.69787 44.6493 12.4977C46.8437 16.2976 47.9993 20.6081 48 24.9961C48.0007 29.384 46.8464 33.6949 44.6533 37.4955L42.4879 36.2459C44.4618 32.8254 45.5006 28.9456 45.5 24.9965C45.4994 21.0473 44.4593 17.1678 42.4844 13.748C40.5094 10.3281 37.6692 7.48825 34.249 5.51384C30.8288 3.53943 26.9492 2.5 23 2.5V0Z"/>
                  </mask>
                  <path d="M23 0C27.388 -5.2326e-08 31.6987 1.15492 35.4989 3.34871C39.2991 5.5425 42.4549 8.69787 44.6493 12.4977C46.8437 16.2976 47.9993 20.6081 48 24.9961C48.0007 29.384 46.8464 33.6949 44.6533 37.4955L42.4879 36.2459C44.4618 32.8254 45.5006 28.9456 45.5 24.9965C45.4994 21.0473 44.4593 17.1678 42.4844 13.748C40.5094 10.3281 37.6692 7.48825 34.249 5.51384C30.8288 3.53943 26.9492 2.5 23 2.5V0Z" stroke="#038A39" stroke-width="3" mask="url(#path-1-inside-1_0_1)"/>
                  <circle cx="23" cy="25" r="23" fill="#038A39" fillOpacity="0.2"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.2391 16.0966C27.8248 15.8906 27.2665 15.7014 26.617 15.8574C26.2873 15.9366 25.9998 16.09 25.7462 16.2778C23.1556 15.6415 20.349 15.9915 18.1016 17.2277C15.6211 18.5922 13.8 21.0611 13.8 24.4162C13.8 26.9125 14.9322 29.2883 16.9579 30.9043V32.9849V34.1685L18.1414 34.1847L19.2349 34.1997L19.2349 34.1999H19.2514H19.9756V34.2L19.9926 34.1997L21.0495 34.1847L22.2324 34.1679V32.9849V32.9457C22.7339 32.9877 23.2326 32.9911 23.7216 32.9547V32.9849V34.1691L24.9057 34.1847L26.0422 34.1998L26.0422 34.1999H26.058H26.7821V34.2L26.7999 34.1997L27.8139 34.1847L28.9961 34.1672V32.9849V30.9009C30.0545 30.0496 30.9033 28.9697 31.4574 27.8089H32.2387H33.4052L33.4382 26.6428L33.5612 22.2934L33.5957 21.0705L32.3723 21.0596L31.4573 21.0514C30.9678 20.0362 30.2573 19.0914 29.4763 18.3176C29.4639 18.1949 29.4457 18.0573 29.4189 17.9131C29.3723 17.6627 29.2911 17.3434 29.1385 17.0348C28.9892 16.7327 28.7184 16.335 28.2391 16.0966ZM19.8324 31.5449V31.7999H19.3578V30.3001V29.667L18.8352 29.3096C17.1295 28.1431 16.2 26.3186 16.2 24.4162C16.2 22.047 17.4426 20.3294 19.2584 19.3305C21.1104 18.3117 23.5335 18.0677 25.6943 18.7549L26.4168 18.9847L26.9345 18.431C26.9787 18.3837 27.0177 18.3446 27.0516 18.3123L27.0594 18.352C27.0827 18.4772 27.0944 18.6044 27.0998 18.7041C27.1023 18.7525 27.1032 18.7908 27.1035 18.8147L27.1036 18.8385L27.1036 18.8395L27.1036 18.8407L27.1036 18.8408L27.0925 19.3857L27.5017 19.7531C28.4006 20.5602 29.1678 21.624 29.5238 22.6409L29.8024 23.4368L30.6457 23.4443L31.1276 23.4486L31.0722 25.4089H30.6564H29.8042L29.5234 26.2134C29.1199 27.3696 28.2636 28.519 27.1143 29.3127L26.5962 29.6705V30.3001V31.7999H26.1215V31.5449V29.9862L24.6146 30.3849C23.6439 30.6417 22.4912 30.6509 21.3031 30.3759L19.8324 30.0354V31.5449ZM26.9816 18.0881L26.9843 18.0928C26.9833 18.0911 26.9826 18.0898 26.9822 18.0891C26.9818 18.0884 26.9816 18.0881 26.9816 18.0881ZM26.1657 22.7796V22.7796C26.1657 22.8462 26.1447 22.9788 26.0293 23.1083C25.9004 23.253 25.7332 23.3037 25.619 23.3037C25.5156 23.3037 25.3856 23.2626 25.2785 23.1579C25.173 23.0546 25.1174 22.9154 25.1174 22.7796H25.619H26.1173L25.619 22.7794L25.1174 22.7793C25.1174 22.6437 25.173 22.5044 25.2787 22.4011C25.3858 22.2963 25.5158 22.2553 25.619 22.2553C25.7329 22.2553 25.9001 22.3059 26.0291 22.4506C26.1446 22.5802 26.1657 22.7129 26.1657 22.7796ZM25.619 21.3038C25.2122 21.3038 24.8183 21.4611 24.536 21.778C24.2671 22.0797 24.1658 22.4503 24.1658 22.7796C24.1658 23.1091 24.2672 23.4797 24.5362 23.7814C24.8187 24.0983 25.2125 24.2553 25.619 24.2553C26.4428 24.2553 27.1171 23.6156 27.1173 22.7799V22.7796C27.1173 21.9441 26.4432 21.3038 25.619 21.3038Z" fill="#038A39"/>
                </Icon>
                <VStack
                  align={'left'}
                >
                  <Text fontSize={['.68em', '1em']} fontWeight='400' display="block" 
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    Savings
                  </Text>
                  <Text fontSize={['.6em', '.9em']} fontWeight='300' display="block" 
                  align={'left'}
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    20%
                  </Text>
                </VStack>
                
              </Flex>
             

              <Flex
              
                align='center'
                justify='center'
              >
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.800' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>10,000/
                </Text>
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.400' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>24,000
                </Text>
              </Flex>
            </Flex>
            
          </Box>
          <Box>
            <Flex
              gap={[2, 3]}
              direction={["row"]}
              justify={'space-between'}
            >
              <Flex gap={3}>
                <Icon width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="23" fill="#F4E9CD"/>
                  <mask id="path-2-inside-1_1_77" fill="white">
                  <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z"/>
                  </mask>
                  <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z" stroke="#C89104" stroke-width="3" mask="url(#path-2-inside-1_1_77)"/>
                  <path d="M34.3166 31.7714H12V34.4H38.2857V31.7714H34.3166ZM36.9714 30.4571C36.6166 25.108 32.7 20.7314 27.5611 19.6669C27.6926 19.3514 27.7714 18.9966 27.7714 18.6286C27.7714 17.1829 26.5886 16 25.1429 16C23.6971 16 22.5143 17.1829 22.5143 18.6286C22.5143 18.9966 22.5931 19.3514 22.7246 19.6669C17.5857 20.7314 13.6691 25.108 13.3143 30.4571H36.9714ZM25.1429 22.0194C29.02 22.0194 32.332 24.4246 33.6857 27.8154H16.6C17.9537 24.4246 21.2657 22.0194 25.1429 22.0194Z" fill="#C89104"/>


                </Icon>
                <VStack
                  align={'left'}
                >
                  <Text fontSize={['.68em', '1em']} fontWeight='400' display="block" 
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    Food and Drink
                  </Text>
                  <Text fontSize={['.6em', '.9em']} fontWeight='300' display="block" 
                  align={'left'}
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    40%
                  </Text>
                </VStack>
                
              </Flex>
             

              <Flex
              
                align='center'
                justify='center'
              >
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.800' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>50,000/
                </Text>
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents" 
                  color='gray.400'
                  _hover={{
                    color: [ "gray.600"]
                  }}
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>42,000
                </Text>
              </Flex>
            </Flex>
            
          </Box>
          <Box>
            <Flex
              gap={[2, 3]}
              direction={["row"]}
              justify={'space-between'}
            >
              <Flex gap={3}>
                <Icon width="50" height="50" viewBox="0 0 48 48" fill="none">
                  <mask id="path-1-inside-1_0_1" fill="white">
                  <path d="M23 0C27.388 -5.2326e-08 31.6987 1.15492 35.4989 3.34871C39.2991 5.5425 42.4549 8.69787 44.6493 12.4977C46.8437 16.2976 47.9993 20.6081 48 24.9961C48.0007 29.384 46.8464 33.6949 44.6533 37.4955L42.4879 36.2459C44.4618 32.8254 45.5006 28.9456 45.5 24.9965C45.4994 21.0473 44.4593 17.1678 42.4844 13.748C40.5094 10.3281 37.6692 7.48825 34.249 5.51384C30.8288 3.53943 26.9492 2.5 23 2.5V0Z"/>
                  </mask>
                  <path d="M23 0C27.388 -5.2326e-08 31.6987 1.15492 35.4989 3.34871C39.2991 5.5425 42.4549 8.69787 44.6493 12.4977C46.8437 16.2976 47.9993 20.6081 48 24.9961C48.0007 29.384 46.8464 33.6949 44.6533 37.4955L42.4879 36.2459C44.4618 32.8254 45.5006 28.9456 45.5 24.9965C45.4994 21.0473 44.4593 17.1678 42.4844 13.748C40.5094 10.3281 37.6692 7.48825 34.249 5.51384C30.8288 3.53943 26.9492 2.5 23 2.5V0Z" stroke="#038A39" strokeWidth="3" mask="url(#path-1-inside-1_0_1)"/>
                  <circle cx="23" cy="25" r="23" fill="#038A39" fillOpacity="0.2"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.2391 16.0966C27.8248 15.8906 27.2665 15.7014 26.617 15.8574C26.2873 15.9366 25.9998 16.09 25.7462 16.2778C23.1556 15.6415 20.349 15.9915 18.1016 17.2277C15.6211 18.5922 13.8 21.0611 13.8 24.4162C13.8 26.9125 14.9322 29.2883 16.9579 30.9043V32.9849V34.1685L18.1414 34.1847L19.2349 34.1997L19.2349 34.1999H19.2514H19.9756V34.2L19.9926 34.1997L21.0495 34.1847L22.2324 34.1679V32.9849V32.9457C22.7339 32.9877 23.2326 32.9911 23.7216 32.9547V32.9849V34.1691L24.9057 34.1847L26.0422 34.1998L26.0422 34.1999H26.058H26.7821V34.2L26.7999 34.1997L27.8139 34.1847L28.9961 34.1672V32.9849V30.9009C30.0545 30.0496 30.9033 28.9697 31.4574 27.8089H32.2387H33.4052L33.4382 26.6428L33.5612 22.2934L33.5957 21.0705L32.3723 21.0596L31.4573 21.0514C30.9678 20.0362 30.2573 19.0914 29.4763 18.3176C29.4639 18.1949 29.4457 18.0573 29.4189 17.9131C29.3723 17.6627 29.2911 17.3434 29.1385 17.0348C28.9892 16.7327 28.7184 16.335 28.2391 16.0966ZM19.8324 31.5449V31.7999H19.3578V30.3001V29.667L18.8352 29.3096C17.1295 28.1431 16.2 26.3186 16.2 24.4162C16.2 22.047 17.4426 20.3294 19.2584 19.3305C21.1104 18.3117 23.5335 18.0677 25.6943 18.7549L26.4168 18.9847L26.9345 18.431C26.9787 18.3837 27.0177 18.3446 27.0516 18.3123L27.0594 18.352C27.0827 18.4772 27.0944 18.6044 27.0998 18.7041C27.1023 18.7525 27.1032 18.7908 27.1035 18.8147L27.1036 18.8385L27.1036 18.8395L27.1036 18.8407L27.1036 18.8408L27.0925 19.3857L27.5017 19.7531C28.4006 20.5602 29.1678 21.624 29.5238 22.6409L29.8024 23.4368L30.6457 23.4443L31.1276 23.4486L31.0722 25.4089H30.6564H29.8042L29.5234 26.2134C29.1199 27.3696 28.2636 28.519 27.1143 29.3127L26.5962 29.6705V30.3001V31.7999H26.1215V31.5449V29.9862L24.6146 30.3849C23.6439 30.6417 22.4912 30.6509 21.3031 30.3759L19.8324 30.0354V31.5449ZM26.9816 18.0881L26.9843 18.0928C26.9833 18.0911 26.9826 18.0898 26.9822 18.0891C26.9818 18.0884 26.9816 18.0881 26.9816 18.0881ZM26.1657 22.7796V22.7796C26.1657 22.8462 26.1447 22.9788 26.0293 23.1083C25.9004 23.253 25.7332 23.3037 25.619 23.3037C25.5156 23.3037 25.3856 23.2626 25.2785 23.1579C25.173 23.0546 25.1174 22.9154 25.1174 22.7796H25.619H26.1173L25.619 22.7794L25.1174 22.7793C25.1174 22.6437 25.173 22.5044 25.2787 22.4011C25.3858 22.2963 25.5158 22.2553 25.619 22.2553C25.7329 22.2553 25.9001 22.3059 26.0291 22.4506C26.1446 22.5802 26.1657 22.7129 26.1657 22.7796ZM25.619 21.3038C25.2122 21.3038 24.8183 21.4611 24.536 21.778C24.2671 22.0797 24.1658 22.4503 24.1658 22.7796C24.1658 23.1091 24.2672 23.4797 24.5362 23.7814C24.8187 24.0983 25.2125 24.2553 25.619 24.2553C26.4428 24.2553 27.1171 23.6156 27.1173 22.7799V22.7796C27.1173 21.9441 26.4432 21.3038 25.619 21.3038Z" fill="#038A39"/>
                </Icon>
                <VStack
                  align={'left'}
                >
                  <Text fontSize={['.68em', '1em']} fontWeight='400' display="block" 
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    Savings
                  </Text>
                  <Text fontSize={['.6em', '.9em']} fontWeight='300' display="block" 
                  align={'left'}
                    _hover={{
                      color: [ "gray.600"]
                    }}
                  >
                    20%
                  </Text>
                </VStack>
                
              </Flex>
             

              <Flex
              
                align='center'
                justify='center'
              >
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.800' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>10,000/
                </Text>
                <Text fontSize={['.8em', '1.3em']} fontWeight='300' display="contents"
                  color='gray.400' 
                  _hover={{
                    color: [ "gray.600"]
                  }}
                  
                >
                  
                  <Icon w={[5, 6]} h={[5, 6]} as={TbCurrencyNaira}></Icon>24,000
                </Text>
              </Flex>
            </Flex>
            
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Budget;
