import React from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    Text
  } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
    <Box p="2">
      <Box textAlign="center">
        <Heading>Contact</Heading>
      
      </Box>
      <Text>I am available for freelance, contract and remote work. <br/>Please contact me at <span style={{color: "red"}}>+2347031054664</span> or email at <span style={{color:"red"}}>deolaoladeji@gmail.com</span></Text>
      <Box my={4} textAlign="left">
        <form action='https://getform.io/f/76817f42-0da2-48c1-9f40-41cc4356620e' method='POST'>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="test@test.com" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="name" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Message</FormLabel>
            <Textarea type="text" placeholder="Enter your message" />
          </FormControl>
          <Button width="full" bg="blue.600" color="white.100" mt={4} type="submit">
            Let's talk
          </Button>
        </form>
      </Box>
    </Box>
  </Flex>
  )
}

export default Contact