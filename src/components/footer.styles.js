import { styled } from "@mui/material/styles";
import { Box } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
  // padding: "2rem 3rem",
 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "1rem",
 margin: "1rem",

  /* [theme.breakpoints.down("sm")]: {
    padding: "0",
  }, */
}));