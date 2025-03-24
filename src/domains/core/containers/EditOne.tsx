import React, { useState, Fragment, ChangeEvent } from 'react';
import {
  Container,
  Link,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Select,
  Switch,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { PageContainer } from 'domains/core/containers';

const EditItem = () => {
  const [itemStatus, setItemStatus] = useState(true);
  const [priceVisibility, setPriceVisibility] = useState(true);

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemStatus(event.target.checked);
  };

  return (
    <Fragment>
      <PageContainer>
        <Container sx={{ paddingTop: 14, paddingBottom: 5 }}>
          <Link href="edititems.html" sx={{ textDecoration: 'none', display: 'block', marginBottom: 4 }}>
            <Typography variant="body1" sx={{ color: '#000', fontWeight: 'regular' }}>
              ← Back to All Items
            </Typography>
          </Link>
          <Typography variant="h4" gutterBottom>
            EDIT ITEM: GETäMSTüHLWIRT
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontWeight: 'regular' }}>
            ITEM STATUS:
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={itemStatus}
                onChange={handleStatusChange}
                color="primary"
              />
            }
            label={itemStatus ? 'Active' : 'Inactive'}
            labelPlacement="end"
          />
          <Typography variant="h6">ITEM PREVIEW</Typography>
          <Typography variant="body2">
            Last updated: Mar 11, 2025
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  image="/api/placeholder/600/600"
                  alt="Chair main view"
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body1">Item Name Getämstühlwirt</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Category Chair</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Style Scandinavian</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Price €5,000 (Public)</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Dimensions 60 × 60 × 60 cm</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">Designer Hans Wegner</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body1">Item Name</Typography>
                    <TextField fullWidth label="Item Name" defaultValue="Getämstühlwirt" required />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Brand</Typography>
                    <TextField fullWidth label="Brand" defaultValue="Hans" required />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Category</Typography>
                    <Select fullWidth label="Category" defaultValue="chairs" required>
                      <MenuItem value="chairs">Chairs</MenuItem>
                      <MenuItem value="tables">Tables</MenuItem>
                      <MenuItem value="sofas">Sofas</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Style</Typography>
                    <Select fullWidth label="Category" defaultValue="chairs" required>
                      <MenuItem value="Scandinavian">Scandinavian</MenuItem>
                      <MenuItem value="Mid-Century-Modern">Mid-Century Modern</MenuItem>
                      <MenuItem value="Industrial">Industrial</MenuItem>
                      <MenuItem value="Minimalist">Minimalist</MenuItem>
                      <MenuItem value="Contemporary">Contemporary</MenuItem>
                      <MenuItem value="Traditional">Traditional</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={itemStatus} onChange={handleStatusChange} />}
                      label="Item Status"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox checked={priceVisibility} onChange={(e) => setPriceVisibility(e.target.checked)} />}
                      label="Price Visibility"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </Fragment>
  );
};

export default EditItem;