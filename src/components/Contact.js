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
        <Text>I am available for freelance, contract and remote work. <br/>Please contact me at <span style={{color: "red"}}>+2347031054664</span> or email at <span style={{color:"red"}}>deolaoladeji@gmail.com</span></Text>
      </Box>
      <Box my={4} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="test@test.com" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Name</FormLabel>
            <Input type="password" placeholder="name" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Message</FormLabel>
            <Textarea type="password" placeholder="Enter your message" />
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