import React from 'react'
import { Heading, useMediaQuery, Flex, Box, Text, Image, Stack, Spacer, HStack, Link } from '@chakra-ui/react';
import MyImage from "../images/arrayDestruct.jpg"

const Projects = () => {
    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
  return (
      <Box w="100vw" p="5">
    <Flex direction={isNotSmallScreen? "row": "column"}
    w= "100%" mt="48"  max-width={{base: "100vh", md:"130vh", lg:"130vh", xl:"130vh"}}>
         
        <Heading fontWeight="bold" color="cyan.500" px="8">Portfolio</Heading>
        
        <Box alignSelf= "center" px="8" py="12">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                2+
            </Heading>
            <Text fontSize="2xl" color="gray.400">Years of experience</Text>
        </Box>
        <Box alignSelf="center" px="32" py="16">
           
            <Flex direction={isNotSmallScreen?"row": "column"} mt={8}>
                <Flex rounded="xl" direction="column" mt={4} bg="white" h="30vh" w="30vh" justify="flex-end">
                    <Image src={MyImage} h='20vh'/>
                    <HStack>
                        <Link href='' color='black'>Code</Link>
                        <Text color='black'>Demo</Text>
                    </HStack>
                   
                </Flex>
                <Spacer/>
                <Flex rounded="xl" direction="column"  ml='5' mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                    <Image src={MyImage}/>
                    <HStack>
                        <Link href=''>Code</Link>
                        <Link>Demo</Link>
                    </HStack>
                </Flex>
                <Spacer/>
                <Flex rounded="xl" direction="column"  ml='5' mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                    <Image src={MyImage}/>
                    <HStack>
                        <Link href=''>Code</Link>
                        <Text>Demo</Text>
                    </HStack>
                </Flex>
            </Flex>

        
        </Box>
    </Flex>
    </Box>
  )
}

export default Projects