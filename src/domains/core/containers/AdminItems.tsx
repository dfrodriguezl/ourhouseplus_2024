import React, { useState, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  TextField,
  MenuItem,
  Pagination,
} from "@mui/material";
import { PageContainer } from 'domains/core/containers';
import { kyotoHouse, heritageHouse, singaporeHouse } from 'assets';

const items = [
  { id: 1, name: "Getämstühlwirt Chair", brand: "Hans", style: "Scandinavian", price: "5000 EUR", image: kyotoHouse },
  { id: 2, name: "Björnson Table", brand: "Greta", style: "Mid-Century Modern", price: "7200 EUR", image: heritageHouse },
  { id: 3, name: "singapore House", brand: "Klaus", style: "Mid-Century Modern", price: "71200 EUR", image: singaporeHouse },
  { id: 4, name: "Getämstühlwirt Chair", brand: "Hans", style: "Scandinavian", price: "5000 EUR", image: kyotoHouse },
  { id: 5, name: "Getämstühlwirt Chair", brand: "Hans", style: "Scandinavian", price: "5000 EUR", image: kyotoHouse },
  { id: 6, name: "Björnson Table", brand: "Greta", style: "Mid-Century Modern", price: "7200 EUR", image: heritageHouse },
  { id: 7, name: "singapore House", brand: "Klaus", style: "Mid-Century Modern", price: "71200 EUR", image: singaporeHouse },
  { id: 8, name: "Getämstühlwirt Chair", brand: "Hans", style: "Scandinavian", price: "5000 EUR", image: kyotoHouse }
];

const AdminItems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Items");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <Fragment>
      <PageContainer>
        <Container sx={{ paddingTop: 14, paddingBottom: 5 }}>
          {/* 🔹 Header */}
          <Typography variant="h4" sx={{ fontWeight: 300, textTransform: "uppercase", marginBottom: 4 }}>
            Admin Items Management
          </Typography>

          {/* Search & Add Button */}
          <Grid container spacing={1} sx={{ mb: 3, ml: 0 }}>
            <TextField
              variant="outlined"
              placeholder="Search items by name, designer, style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: 400,
                height: 36,
                border: "1px solid rgba(0, 0, 0, 0.9)",
                borderRadius: 0,
              }}
              InputProps={{
                sx: {
                  height: 36,
                  border: "1px solid rgba(0, 0, 0, 0.9)",
                  borderRadius: 0,
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                paddingRight: 0,
                paddingLeft: 0,
                height: 36,
                border: "1px solid #000",
                borderRadius: 0,
                backgroundColor: "rgba(0, 0, 0)",
                color: "rgba(255, 255, 255)",
                "&:hover": { backgroundColor: "#ffffff", color: "#000", borderRadius: 0 }
              }}>
              Search
            </Button>
            <Grid item xs={12} sm={2} sx={{ marginRight: 1, marginLeft: 'auto', marginTop: -1  }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  paddingRight: 0,
                  paddingLeft: 0,
                  height: 36,
                  border: "1px solid rgba(0, 0, 0, 0.9)",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "#000000", color: "#fff", borderRadius: 0 }
                }}
              >
                + Add New Item
              </Button>
            </Grid>
          </Grid>

          {/* Filter Buttons */}
          <Grid container spacing={1} sx={{ mb: 3 }}>
            {["All Items", "Chairs", "Tables", "Sofas", "Lighting", "Storage", "Accessories"].map((category) => (
              <Grid item key={category}>
                <Button
                  variant={filter === category ? "contained" : "outlined"}
                  onClick={() => setFilter(category)}
                  sx={{
                    paddingRight: 1,
                    paddingLeft: 1,
                    height: 36,
                    border: "1px solid rgba(0, 0, 0, 0.4)",
                    color: "rgba(0, 0, 0, 0.9)",
                    borderRadius: 0,
                    "&:hover": { backgroundColor: "#000000", color: "#fff", borderRadius: 0 }
                  }}
                >
                  {category}
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* Items Grid */}
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)", marginBottom: 1 }}>
                      {item.brand}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        display: "block",
                        whiteSpace: "normal",
                        overflow: "visible",
                        wordWrap: "break-word",
                        marginBottom: 1
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)", marginBottom: 1 }}>
                      {item.style}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.9)", marginBottom: 1 }}>
                      {item.price}
                    </Typography>

                    {/* 🎯 Action Buttons */}
                    <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{ 
                          textTransform: "none", 
                          borderColor: "black", 
                          color: "black", 
                          borderRadius: 0,
                          "&:hover": { backgroundColor: "#000000", color: "#fff", borderRadius: 0 }
                        }}
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
                          borderRadius: 0,
                          "&:hover": { backgroundColor: "#cc0000", color: "#fff", borderRadius: 0 },
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

          {/* Pagination */}
          <Pagination count={5} sx={{ mt: 4, display: "flex", justifyContent: "center" }} />
        </Container>
      </PageContainer>
    </Fragment>
  );
};

export default AdminItems;