import { Box, Icon, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

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

const Services = () => {
  const isLessThan600 = useMediaQuery("(max-width: 600px)");
  return (
    <Box>
      <Typography variant='h2' textAlign={'center'}>FullStack Developer</Typography>

      <Box>
        <Box my={3} display="flex" gap={2} alignContent={'center'}>
          <Link
            href="https://github.com/Maxafangsco"
            passHref={true}
            target="_blank"
          >
            <GitHubIcon
              fontSize={isLessThan600 ? "small" : 'large'}
              color="black"
              aria-label="Github icon"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/maxmillian-afanga-757050149/"
            passHref={true}
            target="_blank"
          >


            <LinkedInIcon
              size={isLessThan600 ? "small" : 'large'}
              
              color="blue"
              aria-label="Linkedin icon"
            />
          </Link>
          <Link
            href="https://twitter.com/Maxafangsco"
            passHref={true}
            target="_blank"
          >

            <XIcon
              size={isLessThan600 ? "small" : "large"}
              
              color="blue"
              aria-label="Twitter icon"
            />
          </Link>
          <Link
            href="#"
            passHref={true}
            target="_blank"
          >

            <InstagramIcon
              size={isLessThan600 ? "small" : "large"}
              
              color="blue"
              aria-label="Instagram icon"
            />
          </Link>
          <Link
            href="mailto:maxafangsco.com?subject=Hello&body=Hello, world!"
            passHref={true}
            target="_blank"
          >


            <EmailOutlinedIcon
              size={isLessThan600 ? "small" : "large"}
              
              color="teal"
              aria-label="Send email"
            />
          </Link>
        </Box>

        <Box>

        <Box my={4}>
              <Stack px={5} flexDirection={'row'}>

                <Icon as={HtmlIcon} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="orange.500" />
                <Icon as={CssIcon} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="blue.500" />
                <Icon as={FaReact} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="red.500" />
                <Icon as={JavascriptIcon} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="red.500" />
                <Icon as={FaNodeJs} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="green.500" />
                <Icon as={SiNpm} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="red.500" />
                <Icon as={SiNextdotjs} w={isLessThan600 ? 10 : 20} h={isLessThan600 ? 10 : 20} color="black.500" />
              </Stack>
            </Box>

            <Box
              w={isLessThan600 ? "80vw" : "65vw"}
              mr="5px"
              fontFamily={"monospace"}
              fontSize={isLessThan600 ? 18 : 20}
              fontStyle={"normal"}
              fontWeight={400}
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
    </Box>
  )
}

export default Services