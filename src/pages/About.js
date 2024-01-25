import { Avatar, Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import amaxmill from '../images/amaxmill.jpeg'


const Wrapper = styled(Box)(() => ({

  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "1rem",
 margin: "6rem",
}));

const TextWrap = styled(Box)(() => ({
   
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:'1rem'
 
}));

const About = () => {

  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1jvQh4A2M_Il2mKuHu_GnA-FBIvCXOc32/view?usp=sharing', '_blank');
  };

  return (
    <div>
      <Wrapper>
    
   
    <Box sx={{ display: 'flex', gap: 2}}>
      <Avatar 
      alt="Remy Sharp" 
      src={amaxmill}
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
      
    
      {/* <Button colorScheme="blue" size="md" variant="solid" onClick={handleButtonClick}>
      View my Resume
    </Button> */}
    <Button  onClick={handleButtonClick} size='lg' sx={{backgroundColor: "#E9AF20", color: "white"}}> View my Resume</Button>

      </TextWrap>
   </Wrapper>
    </div>
  )
}

export default About