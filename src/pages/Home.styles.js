import { styled } from "@mui/material/styles";
import { Box } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2rem 3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "9px",
  margin: "4rem",
  gap: "2rem"
}));


export const TextWrap = styled(Box)(() => ({
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap:'1rem'
   
  }));