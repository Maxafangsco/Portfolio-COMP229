//import { Box, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
//import {Box, Grid, TextField, useMediaQuery } from "@mui/material";
import { Box, Grid, GridItem, Paper, TextField, Typography, styled, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";


const data = [

  {
    id: 10,
    name: "College mgt system database app",
    text: `
    This is a school project as part of a requirment to complete a college degree.
    `,
    logo: ['Oracle','PL/SQL','Triggers','Functions','sequeces', 'packages'],
    date: "Created on the 10/12/2023",
    link: "https://github.com/Maxafangsco/college-mgt-system-database",
  },
  {
    id: 9,
    name: "Restaurant App",
    text: `
    This is a school project as part of a requirment to complete a college degree. The app is use to place order in a restaurant
    `,
    logo: ['c#','console appplication'],
    date: "Created on the 06/12/2023",
    link: "https://github.com/Maxafangsco/Restaurant-App-wit-c-",
  },
  {
    id: 8,
    name: "Ecommerce-Store",
    text: `
    I used the Next.js 13 App Router to build a fully functional E-Commerce with Admin Dashboard with seamless navigation and user experience.
    `,
    logo: ['nextjs 13(App Router)', 'React', 'Tailwind', 'Prisma','stripe'],
    date: "Created on the 25/07/2023",
    link: "https://ecommerce-store-peach.vercel.app/",
  },
  {
    id: 7,
    name: "Ecommerce-Admin",
    text: `
    I was able to control mulitple vendors / stores through 
    this single CMS! (For example you can have a "Electronic store" and a
     "Dress store" and a "Baby store",
     and our CMS will generate API routes for all of those individually!)
     Search through all categories, products, sizes, colors, billboards with included pagination
    `,
    logo: ['nextjs 13(App Router)', 'React', 'Tailwind (Shadcn UI)', 'Prisma','stripe', 'Stripe webhooks','Clerk Authentication', 'MySQL + Prisma + PlanetScale'],
    date: "Created on the 25/07/2023",
    link: "https://ecommerce-admin-gold-theta.vercel.app/",
  },
  {
    id: 6,
    name: "AI SharePrompt [fullstack]",
    text: `
    In my AI prompt full-stack app, I learned about Next.js 13's folder 
    structure, client/server components, file-based routing, special files, 
    serverless route handlers,
     metadata, and three data fetching methods. Exciting possibilities!
    `,
    logo: ['nextjs 13', 'client & server', 'mongo', 'authentication', 'tailwindcss',],
    date: "Created on the 12/05/2023",
    link: "https://promptshare-self.vercel.app/",
  },

  {

    id: 1,
    name: "My Reads",
    text: `A book tracking app that i created while studying at Udacity. The app allows you 
    to select and categorize books you have read, and currently reading, or want to read`,
    logo: ['Why raect', 'Rendering UI with React', 'state management', 'lifecycle Event', 'React Router'],
    date: "Created  12/03/2021",
    link: "https://myreadnd2021.netlify.app/",
  },
  {
    id: 2,
    name: "Would You Rather Project",
    text: `
      Would You Rather?" is a game where a user is asked a question in 
      the form Would you rather "option A" or "option B" The user can 
      only select one answer. Selecting neither or both is not allowed.
    `,
    logo: ['state managment', 'UI-Redux', 'Redux Middleware', 'Redux & React', 'Asynchronous Redux'],
    date: "Created 12/03/2021",
    link: "https://wouldyouratherap.netlify.app/",
  },
  {
    id: 3,
    name: "Bathany Pie Shop App",
    text: "Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our",
    logo: ['html', 'css', 'javascript'],
    date: "Created  12/03/2019",
    link: "https://bathanypieshopapp.netlify.app",
  },
  {
    id: 4,
    name: "Static Ecommerce site",
    text: `Learn how to create a website that adapts and displays correctly on different 
    screen sizes and devices. 
    This includes utilizing CSS media queries and responsive frameworks like MUI.`,
    logo: ['Responsive Design', 'Product Catalog', 'Shopping Cart Functionality', ''],
    date: "Created 12/03/2019",
    link: "https://startling-flan-0c3963.netlify.app/",
  },
  {
    id: 5,
    name: "My Todo App",
    text: `
    While building my todo app, I gained valuable knowledge and skills in the following areas like
    Add Todo , Remove Todo, Mark Completed,Edit Todo,Drag and Drop Todo
    `,
    logo: ['react', 'events', 'react-beautiful-dnd', 'jsx'],
    date: "Created on the 12/03/2019",
    link: "https://app.netlify.com/sites/glowing-dragon-3bd36f/overview",
  },

];
const ProjectCard = () => {
    const isLessThan600 = useMediaQuery("(max-width: 600px)");

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    // <Box
    // item
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   flexWrap="wrap"
    // >
    //   {data.map((data) => (
    //     
    // </Box>
    <Box sx={{ width: '100%' }}>
       <Grid container spacing={2}>
      {data.map((data) => (
        <Grid item key={data.id} xs={12} sm={6} md={3}>
          <Link href={data.link} passHref={true} target="_blank">
            <Box
              display="flex"
              width="100%"
              height={250}
              flexDirection="column"
              px={5}
              pt={5}
              _hover={{ bg: 'blue.500', color: 'black' }}
              _focus={{ shadow: 'outline' }}
            >
              <Typography fontSize={25} fontWeight={700}>
                {data.name}
              </Typography>
              <Typography noOfLines={[1, 2, 3, 4]} py={5} >
                {data.text}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={2} >
                <Box>{data.date}</Box>
                <Box display="flex" flexWrap="wrap">
              
                  {/* {data.logo.map((logo, index) => (
                    <Box
                      key={index}
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      // borderRadius="50%"
                      // backgroundColor="#ccc"
                      // color="#fff"
                      margin="5px"
                      bg={"orange.200"}
                      // border='2px solid black'
                      // whiteSpace="nowrap"
                      fontSize={8}
                    >
                      {logo}
                    </Box>
                  ))} */}
                </Box>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default ProjectCard;