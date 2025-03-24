import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import { PageContainer, } from 'domains/core/containers';
import { kyotoHouse, heritageHouse, singaporeHouse } from 'assets';

const blogPosts = [
  {
    id: 1,
    title: "Heritage Meets Contemporary Hospitality at Melbourne Place",
    category: "Wanderlust",
    image: heritageHouse,
  },
  {
    id: 2,
    title: "In this Singapore House, Walls Twist and Turn",
    category: "Home",
    image: singaporeHouse,
  },
  {
    id: 3,
    title: "A Gallery Owner's Kyoto Retreat Becomes a Study in Light",
    category: "Home",
    image: kyotoHouse,
  },
  {
    id: 4,
    title: "Coastal Villa Reimagines Mediterranean Living",
    category: "Architecture",
    image: heritageHouse,
  },
  {
    id: 5,
    title: "This Paris Apartment Blends Old-World Charm with Modern Touches",
    category: "Interior",
    image: singaporeHouse,
  },
  {
    id: 6,
    title: "A Mountain Cabin That Embraces Its Surroundings",
    category: "Retreat",
    image: kyotoHouse,
  },
  {
    id: 7,
    title: "New York Loft Transformed by Minimalist Design Principles",
    category: "Urban",
    image: heritageHouse,
  },
  {
    id: 8,
    title: "Australian Garden Creates an Oasis in the Desert",
    category: "Landscape",
    image: singaporeHouse,
  },
  {
    id: 9,
    title: "Mexican Hacienda Brings Together History and Luxury",
    category: "Travel",
    image: kyotoHouse,
  },
  {
    id: 10,
    title: "Berlin Apartment Shows How to Use Bold Colors in Small Spaces",
    category: "Interior",
    image: heritageHouse,
  },
];

const AdminBlogManagement = () => {
  return (
    <Fragment>
      <PageContainer>
        <Container sx={{ paddingTop: 14, paddingBottom: 5 }}>
          {/* 🔹 Header */}
          <Typography variant="h4" sx={{ fontWeight: 300, textTransform: "uppercase", marginBottom: 4 }}>
            Admin Blog Management
          </Typography>

          {/* 📝 Blog Grid */}
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)", marginBottom: 1 }}>
                      {post.category}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: "bold", 
                        display: "block", 
                        whiteSpace: "normal", 
                        overflow: "visible",
                        wordWrap: "break-word"
                      }}
                    >
                      {post.title}
                    </Typography>

                    {/* 🎯 Action Buttons */}
                    <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ textTransform: "none", borderColor: "black", color: "black" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          textTransform: "none",
                          borderColor: "#cc0000",
                          color: "#cc0000",
                          "&:hover": { backgroundColor: "#cc0000", color: "#fff" },
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* 🔹 Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
            <Pagination count={5} color="primary" />
          </Box>
        </Container>
      </PageContainer>
    </Fragment >
  );
};

export default AdminBlogManagement;
