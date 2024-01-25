/*
File Name: Project.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Image } from '@mui/icons-material';

/**
 * Component representing projects page.
 * @returns {JSX.Element} Projects component.
 */
const Projects = () => {
  // Media query hook for responsive design
  const isLessThan600 = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      {/* Main content section */}
      <Box display='flex' flexDirection={isLessThan600 ? 'column' : 'row'}>
        {/* Website snapshot */}
        <Box flex={4} display="flex" justifyContent="center" alignItems="center">
          <Box>
            <div style={{ border: '2px solid #ccc', borderRadius: '10px', width: '800px', height: '600px', marginTop: "60px" }}>
              <iframe
                title="Website Snapshot"
                src="https://www.aproplat.com/"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              />
            </div>
          </Box>
        </Box>
        {/* Description of projects */}
        <Box
          flex={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography fontSize={40} fontWeight={900} textAlign="center" >
            Projects
          </Typography>
          <Typography fontSize={25} fontWeight={300} textAlign="center" width="80%">
            As a full-stack developer, I am responsible for designing, developing, and
            maintaining web applications and systems. I use a variety of
            technologies and skills to create projects that can be used by
            businesses and individuals. I can work on a wide
            range of projects.
          </Typography>
        </Box>
      </Box>

      {/* Header for completed projects */}
      <Typography fontSize={40} fontWeight={700} textAlign="center" my={20}>
        Projects Completed
      </Typography>

      {/* Displaying project cards */}
      <ProjectCard />
    </Box>
  );
}

export default Projects;
