import React from 'react'
import { SimpleGrid, Box, Image } from '@chakra-ui/react'
import CssImg from "../images/css.png"
import HtmlImg from "../images/html.png"
import JsImg from "../images/javascript.png"


const Technologies = () => {
  const tchImages = [
    CssImg, HtmlImg, JsImg
  ]
  return (
    <SimpleGrid columns={3} spacing={10}>
      {/* <Box height='80px'>
        <Image src={CssImg}  />
      </Box>
      <Box height='80px'>
        <Image src={HtmlImg}/>
      </Box> */}
      <Box bg='tomato' height='80px'>
        {tchImages.map(tch=>{
         return <Image src={tch}/>
        })}
      </Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  )
}

export default Technologies