import { Avatar, Box, Button, Typography, styled } from '@mui/material'
import React from 'react'

const Wrapper = styled(Box)(() => ({

  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "1rem",
 margin: "1rem",
}));

const TextWrap = styled(Box)(({ theme }) => ({
   
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:'1rem'
 
}));

const About = () => {
  return (
    <div>
      <Wrapper>
    
   
    <Box sx={{ display: 'flex', gap: 2}}>
      <Avatar 
      alt="Remy Sharp" 
      src={ ""}
      sx={{
        width: '500px', 
        height: '500px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
      }}
      />
    </Box>

    <TextWrap>
      <Typography variant="h4">
      Passionate about delivering exceptional software solutions, <br/>
       I am Maxmillian, a seasoned fullstack developer with <br/>
       expertise in product development and a strong commitment to <br/>
       staying at the forefront of technological advancements.
      </Typography>
      
     <Button size='lg' sx={{backgroundColor: "black", color: "white"}}>Resume</Button>
    </TextWrap>


   </Wrapper>
    </div>
  )
}

export default About