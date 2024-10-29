import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Box, Typography, IconButton, Button, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Project } from '../models';
import { deletes, get } from 'app/api';
import { useAuth0 } from '@auth0/auth0-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
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
    project: Project | undefined;
    getProjects?: any;
}

type Props = OwnProps;
const ModalDeleteProject = (props: Props) => {
    const { open, onClose, project, getProjects } = props;
    // eslint-disable-next-line
    const [projects, setProjects] = useState<Project[]>([]);
    const { user } = useAuth0();
    // eslint-disable-next-line
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);



    useEffect(() => {
        const getProjects = () => {
            get("/projects/user/" + user?.email).then((data: any) => {
                setProjects(data.data.Items);
            })
        }

        getProjects()
    }, [user])

    const deleteProject = () => {
        deletes(`/projects/${project?.idProject}`).then((response) => {
            getProjects()
            onClose()
        })
    }

    return (
        <Fragment>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                message="Project removed"
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
                            Are you sure? Project will be removed definitely from your account
                            <br />
                            <strong>Project: {project?.name}</strong>
                        </Typography>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Button style={styleButton} variant="outlined" onClick={() => deleteProject()}>Remove project</Button>
                </Box>
            </Modal>
        </Fragment>

    );
}

export default ModalDeleteProject;