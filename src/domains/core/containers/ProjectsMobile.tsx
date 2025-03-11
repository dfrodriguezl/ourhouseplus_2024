import React, { useEffect, useState } from 'react';
import { PageContainer } from '.';
import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Box, 
    Button, 
    Grid, 
    IconButton, 
    Theme, 
    Typography, 
    useMediaQuery, 
    useTheme } from '@mui/material';
import { ItemCatalogue, Project } from '../models';
import { get } from 'app/api';
import { useAuth0 } from '@auth0/auth0-react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import CardFavorite from '../components/CardFavorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ModalDeleteProject from '../components/ModalDeleteProject';

const useStyles = makeStyles((theme: Theme) => ({
    buttonNewProject: {
        background: '#FFFFFF66',
        textTransform: "none",
        borderRadius: 20,
        margin: "20px 0"
    },
    blackAccordion: {
        background: "#2A2A2A",
        color: "white"
    },
    whiteIcon: {
        color: "white"
    }
}));

const ProjectsMobile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [projects, setProjects] = useState<Project[]>([]);
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    const history = useNavigate();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const handleOpenModal = () => setOpenModalDelete(true);
    const handleCloseModal = () => setOpenModalDelete(false);
    const [projectToDelete, setProjectToDelete] = useState<Project|undefined>();

    useEffect(() => {
        getProjects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const getProjects = () => {


        get("/projects/user/" + user?.email).then((data: any) => {

            get("/items-catalogue").then((item: any) => {

                const projectsWithFurnitures = data.data.Items.map((element: any) => {
                    let furnituresFiltered: any = [];
                    if (element.furnitures) {
                        element.furnitures.map((furniture: any) => {
                            const itemFiltered = item.data.Items.filter((o: any) => String(o.idItem) === String(furniture));
                            furnituresFiltered.push(itemFiltered[0]);
                            return itemFiltered[0];
                        }, [])
                    }

                    element.furnituresFiltered = furnituresFiltered;

                    return element;

                }, [])

                setProjects(projectsWithFurnitures);
            })




        })
    }

    const goToNewProject = () => {
        history("/newProject")
    }

    const deleteProject = (project: Project) => {
        setProjectToDelete(project);
        handleOpenModal()
    }

    return (
        <PageContainer background="create-project">
                    <Grid item container direction="column" alignContent="center" textAlign="center">
                        <ModalDeleteProject open={openModalDelete} onClose={handleCloseModal} project={projectToDelete} getProjects={getProjects}/>
                        <Typography>PROJECT</Typography>
                        <Box>
                            <FolderOpenIcon fontSize='large' />
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                endIcon={<AddCircleIcon />}
                                className={classes.buttonNewProject}
                                onClick={() => goToNewProject()}
                            >New Project</Button>
                        </Box>
                        <Box width="100%">
                            {projects ?
                                projects.map((project: Project, index) => {
                                    return (
                                        <Accordion key={index}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}>
                                                <IconButton aria-label="delete-item" onClick={() => deleteProject(project)}>
                                                    <RemoveCircleIcon />
                                                </IconButton>
                                                <Grid container direction="row" justifyContent="space-around">
                                                    <Typography>
                                                        {project.name}
                                                    </Typography>
                                                    <Typography>{project.location}</Typography>
                                                </Grid>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Accordion className={classes.blackAccordion}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon className={classes.whiteIcon} />}>
                                                        <Typography>Favorite Items</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        {project.furnituresFiltered?.map((item: ItemCatalogue, index: number) => {
                                                            return (
                                                                <CardFavorite key={index} item={item} />
                                                            )
                                                        })}
                                                    </AccordionDetails>
                                                </Accordion>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })
                                : null}
                        </Box>
                    </Grid>
        </PageContainer>
    )
}

export default ProjectsMobile;