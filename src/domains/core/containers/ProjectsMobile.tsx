import React, { useEffect, useState } from 'react';
import { PageContainer } from '.';
import { Accordion, AccordionSummary, Box, Button, Grid, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Project } from '../models';
import { get } from 'app/api';
import { useAuth0 } from '@auth0/auth0-react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    buttonNewProject: {
        background: '#FFFFFF66',
        textTransform: "none",
        borderRadius: 20,
        margin: "20px 0"
    }
}));

const ProjectsMobile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [projects, setProjects] = useState<Project[]>([]);
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    const history = useNavigate();

    useEffect(() => {

        const getProjects = () => {
            get("/projects/user/" + user?.email).then((data: any) => {
                setProjects(data.data.Items);
            })
        }

        getProjects()
    }, [user])

    const goToNewProject = () => {
        history("/newProject")
    }

    return (
        <PageContainer background="create-project">
            {isAuthenticated ?
                smallScreen ?
                    <Grid item container direction="column" alignContent="center" textAlign="center">
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
                                                <Grid container direction="row" justifyContent="space-around">
                                                    <Typography>
                                                        {project.name}
                                                    </Typography>
                                                    <Typography>{project.location}</Typography>
                                                </Grid>
                                            </AccordionSummary>
                                        </Accordion>
                                    )
                                })
                                : null}
                        </Box>
                    </Grid>
                    : null : null}
        </PageContainer>
    )
}

export default ProjectsMobile;