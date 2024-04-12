import React, { useEffect, useState } from 'react'
import { ItemCatalogue } from '../models';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import AWS from 'aws-sdk';
import { GetObjectRequest } from 'aws-sdk/clients/s3';

interface OwnProps {
    item: ItemCatalogue;
}

type Props = OwnProps;
const CombinationDetail = (props: Props) => {
    const { item } = props;
    const [imageSrc, setImageSrc] = useState<string>();

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

    useEffect(() => {
        getURLImage()
    }, [item])

    return (
        <Card>
            <CardHeader 
            title={item.name} 
            subheader={item.furniture_type}
            subheaderTypographyProps={{color: 'gray'}} />
            <CardMedia 
                component="img"
                height="194"
                image={imageSrc}
                alt={item.name}/>
            <CardContent>
                <Typography>Material: {item.material}</Typography>
                <Typography>Style: {item.style}</Typography>
                <Typography>Brand: {item.brand}</Typography>
            </CardContent>
        </Card>
    )
}

export default CombinationDetail;