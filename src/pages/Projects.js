import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Image } from '@mui/icons-material';

const Projects = () => {
  const isLessThan600 = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      <Box display='flex' flexDirection={isLessThan600 ? 'column' : 'row'}>
        <Box flex={4} display="flex" justifyContent="center"
          alignItems="center" >
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
        <Box
          flex={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        // className={styles.firstDivRight}
        >
          <Typography fontSize={40} fontWeight={900} textAlign="center" >
            Projects
          </Typography>
          <Typography fontSize={25} fontWeight={300} textAlign="center" width="80%">
            As a full-stack developer i am responsible for designing, developing, and
            maintaining web applications and systems. I use a variety of
            technologies and skills to create projects that can be used by
            businesses and individuals. I can work on a wide
            range of projects.
          </Typography>
        </Box>
      </Box>

      <Typography fontSize={40} fontWeight={700} textAlign="center" my={20}>
        Projects Completed
      </Typography>

      <ProjectCard />
    </Box>
  );
}

export default Projects