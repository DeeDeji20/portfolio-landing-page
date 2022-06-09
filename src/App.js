import {Flex, Heading, Icon, Spacer, useColorMode} from '@chakra-ui/react'
import {VStack, IconButton} from '@chakra-ui/react'
import {FaSun, FaMoon, FaBolt} from 'react-icons/fa'
import Header from './components/Header';
import Social from './components/Social';
import BgImage from "./images/deola.jpg"

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
      
      <VStack p={4} backgroundImage= { colorMode=== "dark" ? {base:`linear-gradient(to bottom, rgb(76 76 76 / 90%), rgb(12 1 9 / 85%)), url(${BgImage})`,md:"unset",lg:"unset"} : 
        {base:`linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${BgImage})`,md:"unset",lg:"unset"} }
        bgRepeat="no-repeat" bgSize="cover" bgPosition="center"
        width="100%">
        
        <Flex w="100%">
          <Heading  ml = "8" size="md" fontWeight= "semibold" color="cyan.400" >DEJ<Icon as= {FaBolt} boxSize={3}></Icon></Heading>
          <Spacer></Spacer>
          <IconButton ml={8} icon = { colorMode=== "dark" ? <FaSun/>: <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
          
        </Flex>
       
        <Header/>
        <Social/>
        
      </VStack>

  );
}

export default App;
