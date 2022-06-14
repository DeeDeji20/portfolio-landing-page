import { Circle, Link, useMediaQuery, useColorMode, Flex, Box, Text, Button, Image, Stack, Spacer } from '@chakra-ui/react';
import React from 'react'

import MyImage from "../images/Adeola Adedeji-modified 1.png"


const Header = () => {
    const { coloMode, toggleColorMode } = useColorMode();
    const isDark = coloMode== "dark" 
    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
  return (
    <Stack >
        <Circle position="absolute" bg="blue" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" display={{base:"none", md:"block", lg:"block"}} />
        <Flex direction={isNotSmallScreen ? "row":"column"}
            p={isNotSmallScreen ? "32" : "0"}
            alignSelf="center">
            
            <Box
             mt={isNotSmallScreen ? "0":"290px"} align ="flex-start" textAlign={{base:"center", md:"left", lg:"left"}}  alignItems={{base:"center", md:"center", lg:"flex-start"}}>
                <Text fontSize={{base:"3xl", md:"5xl", lg:"5xl"}} fontWeight="semibold">Hi, I am</Text>   
                <Text fontSize={{base:"5xl", md:"5xl", lg:"7xl"}} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.200, purple.600)" bgClip="text" textAlign={{base:"center", md:"left"}} w="inherit">Adeola Oladeji</Text> 
                <Spacer/>
                <Text color={isDark ? "gray.200" : "gray.500"} textAlign={{base:"center", md:"left"}} w="inherit">
                    A focused and passionate software engineer committed to
                    creating  and executing innovative software solutions.
                </Text>
                <Link href='https://docs.google.com/document/d/1BUg2-Sk7_aeZkihm55ljjSnreDt62nTK0zj515EzoEU/edit?usp=sharing'>
                    <Button mt={8} colorScheme="blue" ml={{base:"0", md:"50px"}} w="inherit">View my Resume</Button>
                </Link>
            </Box>
            <Box>
            <Image display={{base:"none", md:"block",lg:"inherit"}} alignSelf="center" mt={isNotSmallScreen? "0":"12"}
                mb={isNotSmallScreen?"0":"12"} w={{base:"", md:"inherit", lg:"inherit"}}
                
                boxSize="300px" src={MyImage}
            />  

            </Box>
        </Flex>


    </Stack>
  )
}

export default Header
