import React from 'react'
import {Text, Box, HStack, Icon, Spacer, Link } from '@chakra-ui/react'
import {FaFacebookF, FaLinkedin,FaTwitter, FaGithub, FaGoogle, FaSun, FaMoon} from 'react-icons/fa'

const Social = () => {
  return (
      
    <HStack spacing="14" ml="200" >
        <HStack spacing="14" >
            <Link href='https://chakra-ui.com'>
              <Icon as={FaFacebookF} boxSize="30" cursor="pointer" color="blue.700"/>
            </Link>
            <Link href='https://www.linkedin.com/in/adeola-oladeji-1032a6157/'>
              <Icon as={FaLinkedin} boxSize="30" cursor="pointer" color="blue.600"/>
            </Link>
            
            <Link href=''>
              <Icon as={FaGoogle} boxSize="30" cursor="pointer" color="red.600"/>
            </Link>
            
            <Link href=''>
              <Icon as={FaTwitter} boxSize="30" cursor="pointer" color="blue.500"/>
            </Link>
           
            <Link href='https://github.com/DeeDeji20'>
              <Icon as={FaGithub} boxSize="30" cursor="pointer" />
            </Link>
            
        </HStack>
        
    </HStack>
  )
}

export default Social