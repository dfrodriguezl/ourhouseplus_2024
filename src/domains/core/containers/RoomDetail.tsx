import React, { useState, Fragment } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PageContainer, } from 'domains/core/containers';
import { sofa, chair, table } from 'assets';

const room = {
  title: "001 LIVING ROOM",
  dimensions: "22'6L x 15'10\" W → 16'7 HIGH",
  totalPrice: "$15,000",
  furniture: [
    { id: 1, quantity: "1", type: "Sofa", dimensions: 'H 30" W 20" D 22" SH 18"', price: "$5,000", designer: "", company: "", color: "", material: "", delay: "", country: "", status: "", image: sofa },
    { id: 2, quantity: "1", type: "Chair", dimensions: 'H 30" W 20" D 22" SH 18"', price: "$1,500", designer: "", company: "", color: "", material: "", delay: "", country: "", status: "", image: chair },
    { id: 3, quantity: "1", type: "Table", dimensions: 'H 30" W 20" D 22" SH 18"', price: "$2,000", designer: "", company: "", color: "", material: "", delay: "", country: "", status: "", image: table },
    { id: 4, quantity: "1", type: "Sofa", dimensions: 'H 30" W 20" D 22" SH 18"', price: "$5,000", designer: "", company: "", color: "", material: "", delay: "", country: "", status: "", image: sofa },
    { id: 5, quantity: "1", type: "Table", dimensions: 'H 30" W 20" D 22" SH 18"', price: "$2,000", designer: "", company: "", color: "", material: "", delay: "", country: "", status: "", image: table },
  ],
};

const RoomDetail = () => {

  const [selectedOption, setSelectedOption] = useState<{ [key: number]: string }>({});

  const handleOptionSelect = (itemId: number, option: string) => {
    setSelectedOption((prevState) => ({
      ...prevState,
      [itemId]: option,
    }));
  };

  return (
    <Fragment>
      <PageContainer>
        <Container maxWidth="lg" sx={{ paddingBottom: 5 }}>
          {/* 🏠 Hero Section */}
          <Box
            sx={{
              position: "relative",
              height: "50vh",
              minHeight: 400,
              backgroundImage: "url('/api/placeholder/1400/800')",
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
            <Box sx={{ position: "relative", textAlign: "center", width: "100%", padding: 4 }}>
              <Typography variant="h3" sx={{ textTransform: "uppercase", fontWeight: 300 }}>
                Loft NY
              </Typography>
              <Typography>104 Wooster Street</Typography>
              <Typography>NY - USA</Typography>
              <Typography>2023</Typography>
            </Box>
          </Box>

          {/* 🏠 Furniture Choosen Section */}
          <Box sx={{ backgroundColor: "rgba(240, 240, 240, 0.8)", paddingY: 4, textAlign: "center" }}>
            <Typography variant="h6" sx={{ textTransform: "uppercase", fontWeight: 300, letterSpacing: 2 }}>
              Furniture Choosen
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
              {room.furniture.map((item) => (
                <Grid item key={item.id}>
                  <Card sx={{ width: 200, textAlign: "center", padding: 2 }}>
                    <CardMedia component="img" src={item.image} alt={item.type} sx={{ objectFit: "cover", width: "100%", aspectRatio: "4/3" }} />
                    <CardContent>
                      <Typography variant="caption" sx={{ color: "#666" }}>{item.type}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>{item.type.toUpperCase()}</Typography>
                      <Typography variant="caption" sx={{ color: "#666" }}>{item.dimensions}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }}>Price: {item.price}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 🏠 Room Header */}
          <Box sx={{ paddingY: 4 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" sx={{ textTransform: "uppercase", fontWeight: 300 }}>
                  {room.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                  {room.dimensions}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.6)" }}>
                  PROJECTED TOTAL: {room.totalPrice}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {/* 🏠 Furniture Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>QT.</TableCell>
                  <TableCell>TYPE</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell>DESIGNER</TableCell>
                  <TableCell>COMPANY</TableCell>
                  <TableCell>COLOR</TableCell>
                  <TableCell>MATERIAL</TableCell>
                  <TableCell>PRODUCTION DELAY</TableCell>
                  <TableCell>COUNTRY</TableCell>
                  <TableCell>CURRENT STATUS</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {room.furniture.map((item, index) => (
                  <TableRow key={item.id} sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.designer}</TableCell>
                    <TableCell>{item.company}</TableCell>
                    <TableCell>{item.color}</TableCell>
                    <TableCell>{item.material}</TableCell>
                    <TableCell>{item.delay}</TableCell>
                    <TableCell>{item.country}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {["A", "B", "C"].map((option) => (
                          <Button
                            key={option}
                            variant="outlined"
                            size="small"
                            onClick={() => handleOptionSelect(item.id, option)}
                            sx={{
                              minWidth: 26,
                              padding: "2px",
                              borderRadius: "50%",
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: selectedOption[item.id] === option ? "#fff" : "#000",
                              backgroundColor: selectedOption[item.id] === option ? "#333" : "transparent",
                              border: "1px solid #ddd",
                              "&:hover": {
                                backgroundColor: selectedOption[item.id] === option ? "#222" : "#f0f0f0",
                              },
                            }}
                          >
                            {option}
                          </Button>
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ textAlign: "right", marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                minWidth: 26,
                width: 40,
                height: 40,
                borderRadius: "50%",
                fontSize: 30,
                backgroundColor: "#888",
                color: "#fff",
                "&:hover": { backgroundColor: "#666" },
              }}
            >
              +
            </Button>
          </Box>
        </Container>
      </PageContainer>
    </Fragment>
  );
};

export default RoomDetail;
