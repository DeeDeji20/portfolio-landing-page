import { Circle, useMediaQuery, useColorMode, Flex, Box, Text, Button, Image, Stack, Spacer } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
    const { coloMode, toggleColorMode } = useColorMode();
    const isDark = coloMode== "dark" 
    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
  return (
    <Stack>
        <Circle position="absolute" bg="blue" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" display={isNotSmallScreen ? "flex" : "none"} />
        <Flex direction={isNotSmallScreen ? "row":"column"}
            p={isNotSmallScreen ? "32" : "0"}
            alignSelf="center">

            <Box mt={isNotSmallScreen ? "0":"16px"} align ="flex-start"  mr="100">
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>   
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.200, purple.600)" bgClip="text">Adeola Oladeji</Text> 
                <Spacer/>
                <Text color={isDark ? "gray.200" : "gray.500"}>
                    A focused and passionate software engineer committed to
                    creating <br /> and executing innovative software solutions.
                </Text>
                <Button mt={8} colorScheme="blue" >View my Resume</Button>
            </Box>
            <Image alignSelf="center" mt={isNotSmallScreen? "0":"12"}
                mb={isNotSmallScreen?"0":"12"} borderRadius="full" 
                backgroundColor="transparent" boxShadow="lg"
                boxSize="300px" src='https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />    
        </Flex>


    </Stack>
  )
}

export default Header