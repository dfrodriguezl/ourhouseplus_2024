import React, { useState, Fragment } from "react";
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardMedia, 
  CardContent 
} from "@mui/material";
import { PageContainer, } from 'domains/core/containers';
import { barInteriorView, barSeatingArea, barEntranceHallway, barDetail, fullBarView } from 'assets';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Story = () => {
  const [saved, setSaved] = useState(false);

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <Fragment>
      <PageContainer>
        <Container maxWidth="lg" sx={{ paddingTop: 14 }}>
          {/* Breadcrumbs */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="body2">
              <a href="/">Home</a> / <a href="/bar">Bar</a>
            </Typography>
          </Box>

          {/* Título */}
          <Typography variant="h4" align="center" sx={{ marginBottom: 2, marginTop: 2, fontWeight: "bold" }}>
            Inside 2246 Bar, a Moody, Mysterious <br/> Whiskey & Cocktail Bar by Horizontal Studio
          </Typography>

          {/* Imagen Principal */}
          <Box sx={{ position: "relative" }}>
            <img src={barInteriorView} alt="Bar interior view" width="100%" />
            <Button
              onClick={toggleSave}
              sx={{
                position: "absolute",
                bottom: 720,
                right: 10,
                background: saved ? "#fff" : "rgba(255, 255, 255)",
                color: saved ? "#000" : "#000",
                borderRadius: "50%",
                width: 40,
                height: 40,
                minWidth: 0,
                boxShadow: 3,
                "&:hover": { background: "#fff" },
              }}
            >
              {saved ? <BookmarkBorderIcon /> : <BookmarkIcon />}
            </Button>
          </Box>
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            Photo by James Hamilton
          </Typography>

          {/* Contenido Principal */}
          <Grid container spacing={5} sx={{ marginTop: 1 }}>
            {/* Sección Principal */}
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
              Designed by Horizontal Studio, the intimate space is an homage to craft, subtlety and tradition. Tucked away in an emerging neighborhood, 2246 Bar presents a mysterious facade that belies the warm interior within.<br/>

              After Toronto's Horizontal Studio designed their new home, the clients were so pleased they asked the studio to work on their bar too in the city's west end. "We're both attracted to Japanese minimalist principles – the philosophy of less is more," says HCSA owners Aja Sax and Chef Ben Robson. "They manifested a bar experience that's all about quality over quantity."
              </Typography>

              <Box sx={{ position: "relative", marginBottom: 3 }}>
                <img src={barSeatingArea} alt="Bar seating area" width="100%" />
                <Button
                  onClick={toggleSave}
                  sx={{
                    position: "absolute",
                    bottom: 540,
                    right: 10,
                    background: saved ? "#fff" : "rgba(255, 255, 255)",
                    color: saved ? "#000" : "#000",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: 0,
                    boxShadow: 3,
                    "&:hover": { background: "#fff" },
                  }}
                >
                  {saved ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                </Button>
                <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  The main bar area features custom-designed seating with rich leather upholstery. Photo by James Hamilton
                </Typography>
              </Box>

              <Typography variant="body1" paragraph>
                The team at Horizontal Studio sought to create a space that is a prevailing void. The focus for the design team then became "spatial elegance and refined mystery," says Chen. "We incorporated elements in materiality and color that characterizes their venues while maintaining a restrained approach through a modern lens."
              </Typography>

              <Grid container spacing={2}>
                {[barEntranceHallway, barDetail].map((img, index) => (
                  <Grid item xs={6} key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {/* Contenedor con posición relativa para que el botón pueda posicionarse correctamente */}
                    <Box sx={{ position: "relative", width: "100%" }}>
                      <img
                        src={img}
                        alt="Bar detail"
                        style={{
                          width: "100%",
                          aspectRatio: "4/3",
                          objectFit: "cover",
                        }}
                      />
                      <Button
                        onClick={toggleSave}
                        sx={{
                          position: "absolute",
                          bottom: 230,
                          right: 10,
                          background: saved ? "#fff" : "rgba(255, 255, 255)",
                    color: saved ? "#000" : "#000",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                          minWidth: 0,
                          boxShadow: 3,
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        {saved ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                      </Button>
                    </Box>
                    {/* Texto debajo de la imagen */}
                    <Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.6)", marginTop: 1 }}>
                      Photo by James Hamilton
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="body1" paragraph>
              "There are lot opening flavors like the space, then aromas immediately spicy and woodsmoke. The mouthfeel is in immediate food pairing while the finish is long and complex. Deep, layered intensity, both on the wall and below a central rose-pruned damascus and golden hard wattle."</Typography>

              <Typography variant="body1" paragraph>
              Materials were clearly key to the scheme: the curved wall and marble countertops were designed to echo the warmth and softness of well-aged whiskey and brandies, in turn reinforcing the concept of slow drinking. The use of metal mesh window screens allows light and shadow to interact dynamically, creating a balance between privacy and visibility.
              </Typography>

              <Box sx={{ position: "relative", marginTop: 4 }}>
                <img src={fullBarView} alt="Full bar view" width="100%" />
                <Button
                  onClick={toggleSave}
                  sx={{
                    position: "absolute",
                    bottom: 480,
                    right: 10,
                    background: saved ? "#fff" : "rgba(255, 255, 255)",
                    color: saved ? "#000" : "#000",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: 0,
                    boxShadow: 3,
                    "&:hover": { background: "#fff" },
                  }}
                >
                  {saved ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                </Button>
                <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  The architectural lighting design emphasizes the textural qualities of the materials. Photo by James Hamilton
                </Typography>
              </Box>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ paddingLeft: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "normal", marginBottom: 1, color: 'rgba(0, 0, 0, 0.6)' }}>
                  PROJECT DETAILS
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "normal", marginBottom: 1, }}>
                  <strong>LOCATION</strong> <br/>Toronto, Canada
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "normal", marginBottom: 1, }}>
                  <strong>DESIGNER</strong> <br/><a href="#">Horizontal Studio</a>
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "normal", marginBottom: 1, }}>
                  <strong>PROJECT YEAR</strong> <br/>2024
                </Typography>
                <Typography variant="body2">
                  <strong>PHOTOS BY</strong> <br/><a href="#">James Hamilton</a>
                </Typography>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    marginTop: 3, 
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                    color: "#000", 
                    textTransform: "none", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 1, 
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1) !important",
                    }, }}
                  onClick={toggleSave}
                >
                  {saved ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                  {saved ? "Saved to Favorites" : "Save to Favorites"}
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Historias Relacionadas */}
          <Box sx={{ marginTop: 8, paddingTop: 5, borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            <Typography variant="h5" sx={{ marginBottom: 4, fontWeight: "bold" }}>
              You May Also Like
            </Typography>
            <Grid container spacing={3}>
              {[
                { title: "Atmosphere Meets Function at This Tokyo Speakeasy", category: "Bar", img: barInteriorView },
                { title: "Minimal Aesthetics Define This Scandinavian-Inspired Bistro", category: "Restaurant", img: barEntranceHallway },
                { title: "Historic Building Transformed Into Contemporary Wine Bar", category: "Bar", img: barDetail },
              ].map((story, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card component="a" href="#" sx={{ textDecoration: "none", color: "inherit" }}>
                    <CardMedia 
                      component="img" 
                      image={story.img} 
                      alt={story.title}
                      sx={{ aspectRatio: '4/3', objectFit: 'cover' }}  
                    />
                    <CardContent sx={{ marginLeft: -2}}>
                      <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                        {story.category}
                      </Typography>
                      <Typography variant="h6">{story.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </PageContainer>
    </Fragment>
  );
};

export default Story;
