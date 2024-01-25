import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'
import ContactForm from '../components/ContactForm'
import styled from '@emotion/styled';


const Contact = () => {

  const Wrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "1rem",
   margin: "8rem  8rem",
  // width: "100%"
  }));

  return (
    <Wrapper >
     <Box>
         <ContactForm />
    </Box>
    <Box >
    <Card >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Divider  />
        <Typography variant="h4">
          <strong>Name:</strong> John Doe
        </Typography>
        <Typography variant="h4">
          <strong>Email:</strong> john@example.com
        </Typography>
        <Typography variant="h4">
          <strong>Phone:</strong> +1 555-1234
        </Typography>
        <Typography variant="h4">
          <strong>Address:</strong> 123 Main Street, Cityville, USA
        </Typography>
      </CardContent>
    </Card>
    </Box>
    </Wrapper>
  )
}

export default Contact