import React, { Fragment, useEffect, useState } from 'react'
import { Favorite, ItemCatalogue } from '../models';
import { Card, CardContent, CardHeader, CardMedia, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import AWS from 'aws-sdk';
import { GetObjectRequest } from 'aws-sdk/clients/s3';
import makeStyles from '@mui/styles/makeStyles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useAuth0 } from '@auth0/auth0-react';
import { deletes, get, post } from 'app/api';

const useStyles = makeStyles((theme: Theme) => ({
    iconBorderStyle: {
        color: 'black'
    }
}));

interface OwnProps {
    item: ItemCatalogue;
}

type Props = OwnProps;
const CombinationDetail = (props: Props) => {
    const { item } = props;
    const [imageSrc, setImageSrc] = useState<string>();
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    const [favoriteElement, setFavoriteElement] = useState<boolean>(false);
    const [favoriteItem, setFavoriteItem] = useState<Favorite>();
    const { user } = useAuth0();


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
                Key: "Images/" + item.Image_path,
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
        getFavorite()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item])

    const setFavorite = (type: boolean) => {
        setFavoriteElement(type)
    }

    const createFavorite = () => {
        const dataRequest = {
            idItem: item?.idItem,
            user: user?.email
        }

        post("/favorites", { data: dataRequest }).then((response) => {
            setFavorite(true)
        })
    }

    const getFavorite = () => {
        get(`/favorites/item/${user?.email}/${item.idItem}`).then((response) => {
            const items = response.data["Items"];
            if (items.length > 0) {
                setFavorite(true)
                setFavoriteItem(items[0])
            } else {
                setFavorite(false)
            }

        })
    }


    const deleteFavorite = () => {
        deletes(`/favorites/${favoriteItem?.idFavorite}`).then((response) => {
            setFavorite(false)
        })
    }

    return (
        <Card style={smallScreen ? { marginTop: 10 } : {}}>
            {smallScreen ?
                <Fragment>
                    <CardHeader
                        title={item.name}
                        subheader={item.brand}
                        subheaderTypographyProps={{ color: 'gray' }}
                        action={
                            favoriteElement === true ?
                                <IconButton aria-label="favorites" onClick={() => deleteFavorite()}>
                                    <StarIcon className={classes.iconBorderStyle} />
                                </IconButton>
                                :
                                <IconButton aria-label="favorites" onClick={() => createFavorite()}>
                                    <StarBorderIcon className={classes.iconBorderStyle} />
                                </IconButton>
                        } />
                    <CardMedia
                        component="img"
                        height="194"
                        image={imageSrc}
                        alt={item.name} />
                </Fragment> :
                <Fragment>
                    <CardHeader
                        title={item.name}
                        subheader={item.furniture_type}
                        subheaderTypographyProps={{ color: 'gray' }} />
                    <CardMedia
                        component="img"
                        height="194"
                        image={imageSrc}
                        alt={item.name} />
                    <CardContent>
                        <Typography>Material: {item.material}</Typography>
                        <Typography>Style: {item.style}</Typography>
                        <Typography>Brand: {item.brand}</Typography>
                    </CardContent>
                </Fragment>}

        </Card>
    )
}

export default CombinationDetail;