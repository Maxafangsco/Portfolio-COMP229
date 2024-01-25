/*
File Name: Contact.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/

import React from 'react';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import styled from '@emotion/styled';

/**
 * Component representing contact information and a contact form.
 * @returns {JSX.Element} Contact component.
 */
const Contact = () => {

  // Styled wrapper for layout arrangement
  const Wrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "1rem",
    margin: "8rem  8rem",
  }));

  return (
    <Wrapper>
      {/* Box containing contact form */}
      <Box>
        <ContactForm />
      </Box>
      {/* Box containing contact information */}
      <Box>
        <Card>
          <CardContent>
            {/* Title for contact information */}
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            {/* Divider for visual separation */}
            <Divider />
            {/* Individual contact details */}
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
  );
};

export default Contact;
