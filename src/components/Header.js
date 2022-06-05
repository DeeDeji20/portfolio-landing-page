import { Circle, Stack, useMediaQuery, useColorMode, Flex, Box, Text, Button } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
    const { coloMode, toggleColorMode } = useColorMode();
    const isDark = coloMode== "dark" 
    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
  return (
    <Stack>
        <Circle position="absolute" bg="blue" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
        <Flex direction={isNotSmallScreen ? "row":"column"}
            spacng="200px" p={isNotSmallScreen ? "32" : "0"}
            alignSelf="flex-start">

            <Box mt={isNotSmallScreen ? "0":"16px"} align ="flex-start">
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>   
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.200, purple.600)" bgClip="text">Adeola Oladeji</Text> 
                <Text color={isDark ? "gray.200" : "gray.500"}>
                    A focused and passionate software engineer committed to
                    creating and executing innovative software solutions.
                </Text>
                <Button mt={8} colorScheme="blue" >View my Resume</Button>
            </Box>    
        </Flex>


    </Stack>
  )
}

export default Header