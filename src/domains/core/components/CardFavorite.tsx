import React, { Fragment, useEffect, useState } from "react";
import { ItemCatalogue } from "../models";
import { Button, Card, CardContent, CardMedia, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import theme from "app/theme";
import AWS from 'aws-sdk';
import { GetObjectRequest } from "aws-sdk/clients/s3";
import { makeStyles } from "@mui/styles";
import FolderIcon from '@mui/icons-material/Folder';
import ModalProjects from "./ModalProjects";

const useStyles = makeStyles((theme: Theme) => ({
    containerProject: {
        background: '#707070',
        height: '35px'
    },
    buttonProject: {
        width: "100%"
    }
}));

interface OwnProps {
    item?: ItemCatalogue;
}

type Props = OwnProps;
const CardFavorite = (props: Props) => {
    const { item } = props;
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [imageSrc, setImageSrc] = useState<string>();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getURLImage = () => {
            const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME_ITEMS;
            const REGION = process.env.REACT_APP_AWS_REGION;

            AWS.config.update({
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
            });

            const s3 = new AWS.S3({
                params: { Bucket: S3_BUCKET },
                region: REGION,
            });

            const params: GetObjectRequest = {
                Bucket: S3_BUCKET!,
                Key: "Images/" + item?.Image_path,
            };

            s3.getSignedUrl('getObject', params, (err, data) => {
                if (err) {
                    console.error("Error", err)
                    return
                }

                setImageSrc(data)
            })
        }

        getURLImage()

    }, [item])

    return (
        <Card style={smallScreen ? { marginTop: 10 } : {}}>
            <ModalProjects open={open} onClose={handleClose} furnitureID={item?.idItem!} />
            {smallScreen ?
                <Fragment>
                    <CardMedia
                        component="img"
                        height="194"
                        image={imageSrc}
                        alt={item?.name} />
                    <CardContent>
                        <Grid container direction="row" justifyContent="space-between">
                            <Typography>{item?.name}</Typography>
                            <Typography>{item?.dimension_h} {item?.dimension_l} {item?.dimension_w}</Typography>
                        </Grid>
                        <Grid container direction="row" justifyContent="space-between">
                            <Typography>{item?.brand}</Typography>
                            <Typography>{item?.price ? "$ " + Number(item?.price).toLocaleString("de-DE") : ""} </Typography>
                        </Grid>
                        <Grid container className={classes.containerProject}>
                            <Button
                                className={classes.buttonProject}
                                variant="outlined"
                                startIcon={<FolderIcon />}
                                onClick={handleOpen}
                            >
                                Save to project...
                            </Button>
                        </Grid>
                    </CardContent>
                </Fragment> :
                null}

        </Card>
    )
}

export default CardFavorite;