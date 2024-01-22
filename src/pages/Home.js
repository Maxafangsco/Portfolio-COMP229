import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TextWrap, Wrapper } from './Home.styles'
import amaxmill from '../images/amaxmill.jpg'


const Home = () => {
  return (
   <Wrapper>
    <TextWrap>
      <Typography variant="h4"> Hey, I'm Maxmillian</Typography>
      <Typography variant="h2">I enjoy Designing  <br/> 
                  and building software <br /> 
                  changing the world
                  </Typography>
     <Button size='lg' sx={{backgroundColor: "black", color: "white"}}>Get in touch</Button>
    </TextWrap>

    <Box>
    <Box sx={{ display: 'flex', gap: 2}}>
      <Avatar 
      alt="Remy Sharp" 
      src={amaxmill}
      sx={{
        width: '500px', // Adjust the width as needed
        height: '500px', // Adjust the height as needed
        borderRadius: '50%', // Ensure it remains circular
        overflow: 'hidden', // Hide the overflow (part of the head outside the circular background)
      }}
      />
    </Box>
    </Box>

   </Wrapper>
  )
}

export default Home