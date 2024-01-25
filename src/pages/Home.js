/*
File Name: Home.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/

import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TextWrap, Wrapper } from './Home.styles'
import amaxmill from '../images/amaxmill.jpeg'
import { useNavigate } from 'react-router-dom';



/**
 * Component representing the home page.
 * @returns {JSX.Element} Home component.
 */
const Home = () => {

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle button click to navigate to contact page
  const handleButtonClick = () => {
    navigate('/contact'); // Redirect to the '/contact' page
  };
  return (
   <Wrapper>
    <TextWrap>
      <Typography variant="h4"> Hey, I'm Maxmillian</Typography>
      <Typography variant="h2">I enjoy Designing  <br/> 
                  and building software <br /> 
                  changing the world
                  </Typography>
     <Button size='lg' sx={{backgroundColor: "#E9AF20", color: "white"}} onClick={handleButtonClick}>Get in touch</Button>
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