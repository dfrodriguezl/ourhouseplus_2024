import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { PageContainer, } from 'domains/core/containers';
import { barInteriorView, barSeatingArea, barEntranceHallway, barDetail, fullBarView } from 'assets';

const project = {
  title: "LOFT NY",
  address: "104 WOOSTER STREET",
  location: "NY - USA",
  year: "2023",
  heroImage: "/api/placeholder/1400/800",
};

const rooms = [
  {
    id: 1,
    title: "001 LIVING ROOM",
    dimensions: "22'6L x 15'10\" W → 16'7 HIGH",
    furniture: [
      { id: 1, name: "Table", price: "$5,000", image: barInteriorView },
      { id: 2, name: "Lounge Chair", price: "$3,500", image: barSeatingArea },
      { id: 3, name: "Coffee Table", price: "$4,000", image: barEntranceHallway },
      { id: 4, name: "Rug", price: "$5,000", image: barDetail },
      { id: 5, name: "Side Tables (2)", price: "$2,500", image: fullBarView },
    ],
  },
  {
    id: 2,
    title: "002 OFFICE",
    dimensions: "17'4L x 12'10\" W → 16'7 HIGH",
    furniture: [
      { id: 1, name: "Table", price: "$5,000", image: barInteriorView },
      { id: 2, name: "Floor Lamp", price: "$3,200", image: barSeatingArea },
      { id: 3, name: "Library", price: "$6,000", image: barEntranceHallway },
      { id: 4, name: "Desk Chair", price: "$1,500", image: barDetail },
      { id: 5, name: "Guest Chairs", price: "$2,500", image: fullBarView },
    ],
  },
  {
    id: 3,
    title: "003 MAIN BEDROOM",
    dimensions: "17'5L x 13'10\" W → 16'7 HIGH",
    furniture: [
      { id: 1, name: "Table", price: "$5,000", image: barInteriorView },
      { id: 2, name: "Floor Lamp", price: "$3,200", image: barSeatingArea },
      { id: 3, name: "Library", price: "$6,000", image: barEntranceHallway },
    ],
  },
];

const ProjectDetail = () => {
  return (
    <Fragment>
      <PageContainer>
        <Container maxWidth="lg" sx={{ paddingBottom: 5 }}>
          {/* Hero Section */}
          <Box
            sx={{
              position: "relative",
              height: "50vh",
              minHeight: 400,
              backgroundImage: `url(${project.heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
              }}
            />
            <Box sx={{ position: "relative", padding: 4 }}>
              <Typography variant="h3" sx={{ textTransform: "uppercase", fontWeight: 300 }}>
                {project.title}
              </Typography>
              <Typography>{project.address}</Typography>
              <Typography>{project.location}</Typography>
              <Typography>{project.year}</Typography>
            </Box>
          </Box>

          {/* Rooms Section */}
          <Grid container spacing={3} sx={{ marginTop: 4 }}>
            {rooms.map((room) => (
              <Grid item xs={12} sm={6} md={4} key={room.id}>
                <Card>
                  <Box sx={{ backgroundColor: "#f5f5f5", padding: 2, borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: "normal" }}>
                      {room.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                      {room.dimensions}
                    </Typography>
                  </Box>

                  <CardContent>
                    <Box sx={{ marginTop: 2 }}>
                      {room.furniture.map((item, index) => (
                        <Box
                          key={item.id}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                            borderBottom: "1px solid rgba(0,0,0,0.2)",
                          }}
                        >
                          <Typography variant="body2" sx={{ marginRight: 2 }}>
                            {index + 1}
                          </Typography>
                          <Typography variant="body2" sx={{ flexGrow: 1, textAlign: "left" }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" sx={{ marginLeft: "auto", marginRight: 2, fontWeight: "bold" }}>
                            {item.price}
                          </Typography>
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{ width: 40, height: 40, borderRadius: 1, marginLeft: 1 }}
                          />
                        </Box>
                      ))}
                    </Box>
                    <Button fullWidth variant="text" sx={{ marginTop: 2, textTransform: "none", color: "rgba(0, 0, 0, 0.6)" }}>
                      View More →
                    </Button>
                  </CardContent>

                </Card>
              </Grid>
            ))}

            {/* Create New Room Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: "center", padding: 8, backgroundColor: "#f9f9f9" }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#888",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    margin: "0 auto 15px",
                    transition: "background-color 0.2s ease",
                    "&:hover": { backgroundColor: "#666" },
                  }}
                >
                  +
                </Box>
                <Typography>Create New Room</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </Fragment>
  );
};

export default ProjectDetail;
