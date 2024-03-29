import React from 'react'
import { Wrapper } from './footer.styles'
import { Box, Button, Divider, Icon } from '@mui/material'
import { pages, SocialLink } from './Navlink'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer > 
         <Divider  color="#E9AF20" sx={{ height: 2, width: '100%' }}/>
    <Wrapper>
  
        <Box display={'flex'} alignItems={'center'}> 
        <img src={logo} alt="logo" width={100} height={80} />
             I solve the problem
            
        </Box>

      

        <Box>  
            <p>&copy; 2023 Maxafangsco. All Rights Reserved </p>
        </Box>

        <Box >
              <Box  sx={{ display:'flex' ,  textDecoration: 'none'}}>
                {pages.map((page) => (
                  <Link to={page.href}>
                  <Button
                    key={page.id}
                    sx={{  color: 'black', display: 'block' }}
                  >
                  {page.name} 
                  </Button>
                  </Link> 
                ))}
              </Box>
              <Box sx={{  display: 'flex', textDecoration: 'none' }}> 
              {SocialLink.map((social) => (
                  <SocialIcons key={social.id} social={social} />
              ))}
              </Box>
        </Box>
       
     


    </Wrapper>
    </footer>
  )
}

export default Footer