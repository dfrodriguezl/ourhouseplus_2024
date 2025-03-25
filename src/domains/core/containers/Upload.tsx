import React, { FormEvent, Fragment, useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Box,
    Container,
    Snackbar,
} from '@mui/material';
import { PageContainer } from 'domains/core/containers';
import { useAuth0 } from '@auth0/auth0-react';
import { Article } from '../models';
import { post } from 'app/api';
import { useDropzone } from 'react-dropzone';
import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';


const Upload = () => {
    const { user } = useAuth0();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedMainImage, setSelectedMainImage] = useState<File>();
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [isDraft, setIsDraft] = useState<boolean>(false);
    const [featuredImages, setFeaturedImages] = useState<File[]>([]);

    const { getRootProps: getMainImageProps, getInputProps: getMainImageInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: (acceptedFiles) => {
            setSelectedMainImage(acceptedFiles[0]);
        },
    });

    // Dropzone para FEATURED IMAGES (varias imágenes)
    const { getRootProps: getFeaturedProps, getInputProps: getFeaturedInputProps } = useDropzone({
        accept: { 'image/*': [] },
        multiple: true, // Varias imágenes
        onDrop: (acceptedFiles) => {
            setFeaturedImages((prevImages) => [...prevImages, ...acceptedFiles]); // Agregar imágenes al array
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const storyData: Article = {
            title: String(formData.get("title")),
            category: String(formData.get("category")),
            excerpt: String(formData.get("excerpt")),
            content: String(formData.get("content")),
            isDraft: isDraft,
            user: user?.email!
        };

        createStory(storyData);

    }

    const createStory = async (article: Article) => {
        const urlMainImage = await uploadImageToS3(selectedMainImage ? [selectedMainImage] : []);
        article.mainImage = urlMainImage[0];

        const urlFeaturedImages = await uploadImageToS3(featuredImages);
        article.images = urlFeaturedImages;

        post("/articles", { data: article }).then((response) => {
            const result: Article = response.data;
            if (result.articleId) {
                setOpenSnackbar(true);
            }
        })
    }

    const uploadImageToS3 = async (images: File[]): Promise<string[]> => {
        const S3_BUCKET = process.env.REACT_APP_AWS_BUCKET_NAME_STORY_IMAGES;
        const REGION = process.env.REACT_APP_AWS_REGION;

        AWS.config.update({
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
        });

        const s3 = new AWS.S3({
            params: { Bucket: S3_BUCKET },
            region: REGION,
        });

        const uploadPromises = images.map((image) => {
            return new Promise<string>((resolve, reject) => {
    
                const params: PutObjectRequest = {
                    Bucket: S3_BUCKET!,
                    Key: `${Date.now()}-${image.name}`,
                    Body: image
                };
    
                s3.upload(params, (err, data) => {
                    if (err) {
                        console.error("Error uploading file:", err);
                        reject(err);
                    }
    
                    resolve(data.Location);
    
                })
    
            })
        });

        return Promise.all(uploadPromises);

    }



    return (
        <Fragment>
            <PageContainer background="upload">
                <Container maxWidth="md">
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        message="Story created"
                        onClose={handleCloseSnackBar}
                    />
                    <Typography variant="h4" sx={{ letterSpacing: 4, marginTop: '15vh', marginBottom: '4vh', textAlign: 'left' }}>
                        UPLOAD STORY
                    </Typography>

                    <form onSubmit={handleSubmit} method="post">
                        <Grid container spacing={4}>
                            {/* Story Title */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>STORY TITLE</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    variant="outlined"
                                    name="title"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 0,
                                            '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
                                            '&:hover fieldset': { borderColor: '#000' },
                                            '&.Mui-focused fieldset': { borderColor: '#000' },
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Category */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>CATEGORY</Typography>
                                <Select
                                    fullWidth
                                    required
                                    displayEmpty
                                    defaultValue=""
                                    name="category"
                                    MenuProps={{
                                        disablePortal: true,
                                        disableScrollLock: true,
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                                overflowY: 'auto'
                                            }
                                        }
                                    }}
                                    sx={{
                                        borderRadius: 0,
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 0,
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(0, 0, 0, 0.1)',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#000',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#000',
                                        }
                                    }}
                                >
                                    <MenuItem value="" disabled>Select a category</MenuItem>
                                    <MenuItem value="wanderlust">Wanderlust</MenuItem>
                                    <MenuItem value="home">Home</MenuItem>
                                    <MenuItem value="design">Design</MenuItem>
                                    <MenuItem value="architecture">Architecture</MenuItem>
                                </Select>
                            </Grid>

                            {/* Story Excerpt */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>STORY EXCERPT</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    multiline
                                    rows={2}
                                    name="excerpt"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 0,
                                            '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
                                            '&:hover fieldset': { borderColor: '#000' },
                                            '&.Mui-focused fieldset': { borderColor: '#000' },
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Story Content */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>STORY CONTENT</Typography>
                                <TextField
                                    fullWidth
                                    required
                                    multiline
                                    rows={6}
                                    name="content"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 0,
                                            '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.1)' },
                                            '&:hover fieldset': { borderColor: '#000' },
                                            '&.Mui-focused fieldset': { borderColor: '#000' },
                                        }
                                    }}
                                />
                            </Grid>

                            {/* Main Image Upload */}
                            <Grid item xs={12}>
                                <div {...getMainImageProps({ refKey: 'innerRef' })}>
                                    <input
                                        style={{ display: 'none' }}
                                        {...getMainImageInputProps()} />
                                    <label htmlFor="image-project">
                                        {selectedMainImage ?
                                            <img src={selectedMainImage ? URL.createObjectURL(selectedMainImage) : ""} alt="style" width={250} />
                                            : <Grid item xs={12}>
                                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>MAIN IMAGE</Typography>
                                                <Box sx={{
                                                    border: '2px dashed rgba(0, 0, 0, 0.1)',
                                                    padding: '20px',
                                                    textAlign: 'center',
                                                    cursor: 'pointer',
                                                    '&:hover': { backgroundColor: '#f9f9f9' }
                                                }}>
                                                    <Typography variant="body1">Drag and drop images here or click to upload</Typography>
                                                    <input type="file" accept="image/*" hidden onChange={handleFileChange} name="mainImage" />
                                                    {selectedFile && <Typography variant="body2" sx={{ marginTop: '10px' }}>Selected: {selectedFile.name}</Typography>}
                                                </Box>
                                            </Grid>}
                                    </label>
                                </div>
                            </Grid>

                            {/* Image Upload */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>
                                    FEATURED IMAGES
                                </Typography>
                                <Box {...getFeaturedProps()} sx={{
                                    border: '2px dashed rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { backgroundColor: '#f9f9f9' }
                                }}>
                                    <input {...getFeaturedInputProps()} />
                                    <Typography variant="body1">Drag and drop images here or click to upload</Typography>
                                </Box>

                                {/* Mostrar miniaturas de imágenes seleccionadas */}
                                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                                    {featuredImages.map((file, index) => (
                                        <Grid item key={index} xs={3} sx={{ position: 'relative' }}>
                                            <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} width="100%" />
                                            <Button
                                                size="small"
                                                onClick={() => setFeaturedImages((prev) => prev.filter((_, i) => i !== index))}
                                                sx={{
                                                    position: 'absolute',
                                                    top: 5,
                                                    right: 5,
                                                    background: 'rgba(0,0,0,0.6)',
                                                    color: '#fff',
                                                    borderRadius: '50%',
                                                    minWidth: 24,
                                                    height: 24,
                                                    padding: 0,
                                                }}
                                            >
                                                ✕
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* Buttons */}
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 5 }}>
                                <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', borderRadius: 0 }} type="submit" onClick={() => setIsDraft(false)} disabled={!selectedMainImage}>Publish Story</Button>
                                <Button variant="outlined" color="secondary" sx={{ borderRadius: 0 }} type="submit" onClick={() => setIsDraft(true)}>Save as Draft</Button>
                            </Grid>
                        </Grid>
                    </form>

                </Container>
            </PageContainer>
        </Fragment>
    );
}

export default Upload;
