import React from 'react';
import { Box, Container, Grid, Link, Theme, Typography } from '@mui/material';


import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      background: '#2A2A2A 0% 0% no-repeat padding-box',
      padding: '20px 50px'
    },
    fontStyle: {
      color: '#FFFFFF',
      font: 'normal normal normal 20px/23px Centaur'
    },
    footer: {
      fontSize: 12,
      lineHeight: '16px',
      '& a': {
        color: 'white',
        opacity: '89%'
      }
    },
    links: {
      marginRight: 6
    },
    bottomLinks: {
      float: 'right',
      marginRight: 20,
      paddingTop: 5,
      '& img': {
        paddingLeft: 10
      }
    },
    socialButtons: {
    },
    item: {
      marginRight: 70,
    },
    itemInactive: {
      color: '#434343 !important',
      pointerEvents: 'none',
    }
  })
);

const Footer = () => {
  const classes = useStyles()

  return (
    // <Grid container item className={classes.root} xs={12} justifyContent="flex-end">
    //   <Typography className={classes.fontStyle}>HOUSE COLLECTION By HOUSE+</Typography>
    // </Grid>
    <Box component="footer" sx={{ py: 10, borderTop: "1px solid rgba(0, 0, 0, 0.1)", mt: 10 }}>
      <Container>
        <Grid container spacing={8}>
          {/* Sección 1: Story Submissions */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: 14, color: "#666", mb: 3, fontWeight: "normal" }}>
              Tell us about your story
            </Typography>
            <Link href="#" sx={{ display: "block", textDecoration: "none", color: "#333", fontSize: 15, mb: 2, transition: "opacity 0.2s ease", "&:hover": { opacity: 0.7 } }}>
              Story submissions →
            </Link>
            <Link href="#" sx={{ display: "block", textDecoration: "none", color: "#333", fontSize: 15, transition: "opacity 0.2s ease", "&:hover": { opacity: 0.7 } }}>
              Join our contributor database →
            </Link>
          </Grid>

          {/* Sección 2: Contacto */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: 14, color: "#666", mb: 3, fontWeight: "normal" }}>
              Get in touch
            </Typography>
            <Link href="mailto:hello@house-collection.com" sx={{ display: "block", textDecoration: "none", color: "#333", fontSize: 15, mb: 2, transition: "opacity 0.2s ease", "&:hover": { opacity: 0.7 } }}>
              hello@house-collection.com →
            </Link>
            <Link href="mailto:partnerships@house-collection.com" sx={{ display: "block", textDecoration: "none", color: "#333", fontSize: 15, transition: "opacity 0.2s ease", "&:hover": { opacity: 0.7 } }}>
              partnerships@house-collection.com →
            </Link>
          </Grid>

          {/* Sección 3: Información de la empresa */}
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: 14, color: "#666", mb: 3, fontWeight: "normal" }}>
              Company
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
              House Collection by House Plus<br />
              Miami, FL USA
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
