/*
File Name: Home.style.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

// Styled component for the wrapper
export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2rem 3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "9px",
  margin: "4rem",
  gap: "2rem"
}));

// Styled component for the text wrapper
export const TextWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:'1rem'
}));
