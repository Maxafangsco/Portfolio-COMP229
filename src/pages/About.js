/*
File Name: About.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/

import React from 'react';
import { Avatar, Box, Button, Typography, styled } from '@mui/material';
import amaxmill from '../images/amaxmill.jpeg';

/**
 * Component representing information about the developer.
 * @returns {JSX.Element} About component.
 */
const About = () => {

  /**
   * Function to handle button click to open resume link in a new tab.
   */
  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1jvQh4A2M_Il2mKuHu_GnA-FBIvCXOc32/view?usp=sharing', '_blank');
  };

  return (
    <div>
      {/* Wrapper for layout arrangement */}
      <Wrapper>
        {/* Box for displaying avatar */}
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

        {/* Box for displaying text content */}
        <TextWrap>
          {/* Developer's introduction */}
          <Typography variant="h4">
            Passionate about delivering exceptional software solutions, <br/>
            I am Maxmillian, a seasoned fullstack developer with <br/>
            expertise in product development and a strong commitment to <br/>
            staying at the forefront of technological advancements.
          </Typography>

          {/* Button to view resume */}
          <Button onClick={handleButtonClick} size='lg' sx={{backgroundColor: "#E9AF20", color: "white"}}>
            View my Resume
          </Button>
        </TextWrap>
      </Wrapper>
    </div>
  );
};

// Wrapper styled component for layout arrangement
const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "1rem",
  margin: "6rem",
}));

// TextWrap styled component for text content arrangement
const TextWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:'1rem'
}));

export default About;
