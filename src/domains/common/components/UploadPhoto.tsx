import { Button, createStyles, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React, { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { bill } from "assets";


const useStyles = makeStyles(() =>
  createStyles({
    addButton: {
      marginLeft: 10
    },
    bottomTextContainer: {
      alignContent: 'flex-end'
    },
    bottomText: {
      fontWeight: 'bolder',
      fontFamily: 'Arial',
      letterSpacing: 2
    },
    container: {
      borderRadius: 20,
      border: '#707070 solid 1px',
      background: '#FFFFFF',
      margin: '20px 90px',
      height: 30
    },
    containerPhoto: {
      textAlign: 'center'
    },
    buttonUpload: {
      background: '#4A7A5A',
      color: 'white',
      textTransform: "capitalize",
      padding: '0px 30px',
      borderRadius: 20
    },
    containerButton: {
      height: '5%'
    }
  })
);


const UploadPhoto = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const onChangeImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  }

  return (
    <PageContainer background={smallScreen ? "waiting-background-list" : "waiting-back"}>
      {smallScreen ?
        <Grid container>
          <Grid item container xs={12} justify="center" className={classes.container} direction="row">
            <Typography variant="subtitle1">Choose project.</Typography>
            <ExpandMoreIcon className={classes.addButton} />
          </Grid>
          <Grid item container xs={12} justify="center" direction="column" alignContent="center" className={classes.containerPhoto}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="image-bill"
              onChange={onChangeImage}
            />
            <label htmlFor="image-bill">
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : bill} alt="exmaple-bill" width={250} />
            </label>
            <Typography variant="caption">choose photo <br /> from phone library</Typography>
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.containerButton}>
            <Button className={classes.buttonUpload} component="span">Upload</Button>
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.bottomTextContainer}>
            <Typography variant="subtitle1" className={classes.bottomText}>Build on budget.</Typography>
          </Grid>
        </Grid>
        : null}
    </PageContainer>
  )
}

export default UploadPhoto;