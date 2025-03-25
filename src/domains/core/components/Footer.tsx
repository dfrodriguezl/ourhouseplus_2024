import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {

  return (
    <Box component="footer" sx={{ py: 10, borderTop: "1px solid rgba(0, 0, 0, 0.1)"}}>
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
