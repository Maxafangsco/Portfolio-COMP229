/*
File Name: Services.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/
import { Box, Divider, Icon, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import React from 'react'


import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import {
  FaAws,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiDocker,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiNextdotjs,
  SiNpm,
  SiPostgresql,
} from "react-icons/si";
import { Link } from 'react-router-dom';

/**
 * Component representing services provided.
 * @returns {JSX.Element} Services component.
 */

const Services = () => {
  const isLessThan600 = useMediaQuery("(max-width: 600px)");
  return (
    <Box>
      <Typography variant='h2' mt={3} textAlign={'center'}>What I can do</Typography>

      <Box>
       

        <Box 
         flex={5}
         display="flex"
         justifyContent="center"
         alignItems="center"
         flexDirection="column"
        >

          <Box my={4}>
            <Stack px={5}  flexDirection={'row'} gap={5} justifyContent={'center'}>
            
              <Icon as={HtmlIcon} fontSize="large" color="orange" />
              <Icon as={CssIcon} fontSize="large" color="blue.500" />
              <Icon as={FaReact} fontSize="large" color="red.500" />
              <Icon as={JavascriptIcon} fontSize="large"color="red.500" />
              <Icon as={FaNodeJs} fontSize="large" color="green.500" />
              <Icon as={SiNpm} fontSize="large" color="red.500" />
              <Icon as={SiNextdotjs} fontSize="large" color="black.500" />
            </Stack>
          </Box>

          <Box
             w={isLessThan600 ? "80vw" : "65vw"}
             m="15px"
             fontFamily={"monospace"}
             fontSize={isLessThan600 ? 18 : 20}
             fontStyle={"normal"}
             fontWeight={400}
             lineHeight={2}
             gap={5}
          >
            ⚡ Designing and implementing user interfaces using libraries and frameworks such as React and Nexjs.
            <br />
            ⚡ Developing and maintaining server-side logic using Node.js and frameworks such as Express.  <br />
            ⚡ Creating and consuming web services using technologies such as REST and GraphQL.
            <br />
            ⚡ Managing databases and performing database operations using technologies such as MongoDB and MySQL.  <br />
            ⚡ Implementing security measures such as authentication and authorization to protect sensitive data.
            <br />

            ⚡ Optimizing web pages for speed and scalability.  <br />
            ⚡ Continuously testing, monitoring, and improving the performance of the application.
            <br />
          </Box>
        </Box>



      </Box>



      <Divider my={2} />
      <Box display={isLessThan600 ? '' : "flex"}>
        <Box
          flex={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          // className={styles.firstDivRight}
          my={3}
        >
          <Typography variant='h2' textAlign={'center'}>Cloud Infra-Architecture</Typography>
          <Box my={5}>
            <Stack px={5} flexDirection={'row'} gap={5} >


              <Tooltip label="AWS" aria-label="A tooltip">
                <span>
                  <Icon as={FaAws} fontSize="large"color="orange.500" />
                </span>
              </Tooltip>

              <Tooltip label="Azure" aria-label="A tooltip">
                <span>
                  <Icon as={SiMicrosoftazure} fontSize="large"color="blue.500" />
                </span>
              </Tooltip>

              <Tooltip label="Postgresql" aria-label="A tooltip">
                <span>
                  <Icon as={SiPostgresql} fontSize="large"/>
                </span>
              </Tooltip>

              <Tooltip label="MongoDB" aria-label="A tooltip">
                <span>
                  <Icon as={SiMongodb} fontSize="large"color="green.500" />
                </span>
              </Tooltip>
              <Tooltip label="Docker" aria-label="A tooltip">
                <span>
                  <Icon as={SiDocker} fontSize="large"color="blue.500" />
                </span>
              </Tooltip>
            </Stack>
          </Box>
          <Box
            w={isLessThan600 ? "80vw" : "65vw"}
            m="15px"
            fontFamily={"monospace"}
            fontSize={isLessThan600 ? 18 : 20}
            fontStyle={"normal"}
            fontWeight={400}
            lineHeight={2}
            gap={5}
          >
            ⚡ Designing and implementing scalable, high-performance, and cost-effective <br />
            cloud-based systems using cloud platforms.
            <br />
            ⚡ Creating and managing cloud-based infrastructure, <br />
            ⚡ Configuring and managing database services such as Postgres and MongoDB, <br /> including
            setting up database replication, PL/SQL backup, and recovery.
            <br />
            ⚡ Creating and maintaining documentation for cloud-based systems and applications.
            <br />

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Services