import React from 'react'
import "./style.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {

    return (
        <div>
            <footer className="footer" style={{textAlign: 'center'}}>
            <Container sx={{textAlign: 'center',mb: 3}}>
              <Typography variant="h2" style={{marginTop: "30px", marginBottom: "30px",}}>Our Team</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  {/* Dev */}
                  <Box sx={{textAlign: 'justify'}}>
                    <Typography variant="h4">Dev Kahar</Typography>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://www.linkedin.com/in/dev-kahar-9234741aa/" target="_blank"><Typography><LinkedInIcon/> LinkedIn</Typography></a>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/Devkahar" target="_blank" ><Typography><GitHubIcon/> Github</Typography></a>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  {/* Sparsh */}
                  <Box sx={{textAlign: 'justify'}}>
                    <Typography variant="h4">Sparsh Arya</Typography>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://www.linkedin.com/in/sparsh-arya-884966226" target="_blank"><Typography><LinkedInIcon/> LinkedIn</Typography></a>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/sparsharya16" target="_blank" ><Typography><GitHubIcon/> Github</Typography></a>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  {/* Vishesh */}
                  <Box sx={{textAlign: 'justify'}} >
                    <Typography variant="h4">Vishesh Modi</Typography>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://www.linkedin.com/in/vishesh3011/" target="_blank" ><Typography><LinkedInIcon/> LinkedIn</Typography></a>
                    <a style={{textDecoration: 'none',color: 'white'}} href="https://github.com/Vishesh3011" target="_blank" ><Typography><GitHubIcon/> Github</Typography></a>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </footer>
        </div>
    )
}
export default Footer;