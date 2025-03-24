import React, { Fragment, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Box,
    Container,
    Paper,
    useMediaQuery,
    useTheme,
    FormControl,
    InputLabel,
} from '@mui/material';
import { PageContainer } from 'domains/core/containers';
import { useAuth0 } from '@auth0/auth0-react';

interface OwnProps { }

const Upload = (props: OwnProps) => {
    const { isAuthenticated, user } = useAuth0();
    const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
    const theme = useTheme();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <Fragment>
            <PageContainer background="upload">
                <Container maxWidth="md">
                    <Typography variant="h4" sx={{ letterSpacing: 4, marginTop: '12vh', marginBottom: '4vh', textAlign: 'left' }}>
                        UPLOAD STORY
                    </Typography>

                    <form>
                        <Grid container spacing={4}>
                            {/* Story Title */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>STORY TITLE</Typography>
                                <TextField
                                    fullWidth
                                    required
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

                            {/* Category */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>CATEGORY</Typography>
                                <Select
                                    fullWidth
                                    required
                                    displayEmpty
                                    defaultValue=""
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

                            {/* Image Upload */}
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" sx={{ letterSpacing: 3, fontWeight: 'bold', marginBottom: '15px' }}>FEATURED IMAGES</Typography>
                                <Box sx={{
                                    border: '2px dashed rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { backgroundColor: '#f9f9f9' }
                                }}>
                                    <Typography variant="body1">Drag and drop images here or click to upload</Typography>
                                    <input type="file" accept="image/*" hidden onChange={handleFileChange} />
                                    {selectedFile && <Typography variant="body2" sx={{ marginTop: '10px' }}>Selected: {selectedFile.name}</Typography>}
                                </Box>
                            </Grid>

                            {/* Buttons */}
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 5 }}>
                                <Button variant="contained" sx={{ backgroundColor: '#000', color: '#fff', borderRadius: 0 }} type="submit">Publish Story</Button>
                                <Button variant="outlined" color="secondary" sx={{ borderRadius: 0 }}>Save as Draft</Button>
                            </Grid>
                        </Grid>
                    </form>

                </Container>
            </PageContainer>
        </Fragment>
    );
}

export default Upload;
