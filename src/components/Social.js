import React from 'react'
import {Text, Box, HStack, Icon, Spacer, Link, useMediaQuery } from '@chakra-ui/react'
import {FaFacebookF, FaLinkedin,FaTwitter, FaGithub, FaGoogle, FaSun, FaMoon} from 'react-icons/fa'

const Social = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
  return (
      
    <HStack >
        <HStack spacing="14">
            <Link href='https://chakra-ui.com'>
              <Icon as={FaFacebookF} boxSize={isNotSmallScreen ? "30":"6"} cursor="pointer" color="blue.700"/>
            </Link>
            <Link href='https://www.linkedin.com/in/adeola-oladeji-1032a6157/'>
              <Icon as={FaLinkedin} boxSize={isNotSmallScreen ? "30":"6"} cursor="pointer" color="blue.600"/>
            </Link>
            
            <Link href=''>
              <Icon as={FaGoogle} boxSize={isNotSmallScreen ? "30":"6"} cursor="pointer" color="red.600"/>
            </Link>
            
            <Link href=''>
              <Icon as={FaTwitter} boxSize={isNotSmallScreen ? "30":"6"} cursor="pointer" color="blue.500"/>
            </Link>
           
            <Link href='https://github.com/DeeDeji20'>
              <Icon as={FaGithub} boxSize={isNotSmallScreen ? "30":"6"} cursor="pointer" />
            </Link>
            
        </HStack>
        
    </HStack>
  )
}

export default Social