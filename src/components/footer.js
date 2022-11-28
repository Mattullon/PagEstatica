import React from 'react'
import Link from '@mui/material/Link';
import "../App.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';
const Footer = () => {
  return (
    <div className="footer" >
  <footer className="">
    Footer
    <Grid container spacing={4} justifyContent={"center"}>
      <Grid item><FacebookIcon></FacebookIcon>
    <Link color="inherit" href="https://facebook.com/">
        Facebook 
      </Link>{' '}   
      </Grid>
      <Grid item>
      <TwitterIcon></TwitterIcon>
    <Link color="inherit" href="https://twitter.com/">
        Twitter 
      </Link>{' '}
      </Grid>    
            
    </Grid>

      
    
    <p >&copy; 2022 Company, Inc</p>
  </footer>
</div>
  )
}

export default Footer