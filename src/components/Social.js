import React from 'react'
import {Text, Box, HStack, Icon, Spacer } from '@chakra-ui/react'
import {FaFacebookF, FaLinkedin,FaTwitter, FaGithub, FaGoogle, FaSun, FaMoon} from 'react-icons/fa'

const Social = () => {
  return (
      
    <HStack spacing="14" ml="200" >
        <HStack spacing="14" >
            <Icon as={FaFacebookF} boxSize="30" cursor="pointer" color="blue.700"/>
            <Icon as={FaLinkedin} boxSize="30" cursor="pointer" color="blue.600"/>
            <Icon as={FaGoogle} boxSize="30" cursor="pointer" color="red.600"/>
            <Icon as={FaTwitter} boxSize="30" cursor="pointer" color="blue.500"/>
            <Icon as={FaGithub} boxSize="30" cursor="pointer" />
        </HStack>
        
    </HStack>
  )
}

export default Social