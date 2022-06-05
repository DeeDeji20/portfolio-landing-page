import {Flex, Heading, HStack, Icon, Spacer, useColorMode} from '@chakra-ui/react'
import {VStack, IconButton} from '@chakra-ui/react'
import {FaFacebook, FaLinkedin, FaGithub, FaMailchimp, FaSun, FaMoon, FaBolt} from 'react-icons/fa'
import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode=== "dark" 

  return (
      
      <VStack p={4}>
        
        <Flex w="100%">
          <Heading  ml = "8" size="md" fontWeight= "semibold" color="cyan.400" >DEJ<Icon as= {FaBolt} boxSize={3}></Icon></Heading>
          <Spacer></Spacer>
          <IconButton ml={8} icon = { isDark? <FaSun/>: <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
          
        </Flex>
       
        <Header/>
        <Social/>
        <Profile/>
        
      </VStack>

  );
}

export default App;
