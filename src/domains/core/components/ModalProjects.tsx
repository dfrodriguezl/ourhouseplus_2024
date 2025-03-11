import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Box, Typography, IconButton, Button, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import { Project } from '../models';
import { get, put } from 'app/api';
import { useAuth0 } from '@auth0/auth0-react';

const style = {
    position: 'absolute',
    //top: '50%',
    //left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const styleButton = {
    color: 'black',
    borderColor: 'black',
    marginTop: 20
}

interface OwnProps {
    open: boolean;
    onClose: any;
    furnitureID: string;
}

type Props = OwnProps;
const ModalProjects = (props: Props) => {
    const { open, onClose, furnitureID } = props;
    const [projects, setProjects] = useState<Project[]>([]);
    const { user } = useAuth0();
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

    const saveInProject = (project: Project) => {
        let furnitures: string[] = [];

        if (project.furnitures) {
            furnitures = project.furnitures;
        }

        if (!project.rooms) {
            project.rooms = [];
        }

        furnitures.push(furnitureID);

        project.furnitures = furnitures;

        put("/projects/" + project?.idProject, { data: project! }).then((response) => {
            setOpenSnackbar(true);
        })
    }

    useEffect(() => {
        const getProjects = () => {
            get("/projects/user/" + user?.email).then((data: any) => {
                setProjects(data.data.Items);
            })
        }

        getProjects()
    }, [user])

    return (
        <Fragment>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                message="Project modified"
            />
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-carousel-title"
                aria-describedby="modal-carousel-description"
            >
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography id="modal-carousel-title" variant="h6" component="h2">
                            Projects
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Carousel>
                        {projects.map((project: Project, i: number) => (
                            <Box key={i} textAlign="center">
                                <Typography variant="h6">{project.name}</Typography>
                                <Typography>{project.location}</Typography>
                                <Button style={styleButton} variant="outlined" onClick={() => saveInProject(project)}>Save to project</Button>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Modal>
        </Fragment>

    );
}

export default ModalProjects;