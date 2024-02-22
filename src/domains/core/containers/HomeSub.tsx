import React, { useEffect, useState } from 'react';
import { Project } from '../models';
import { ProjectsList } from '../components';
import { get } from 'app/api';
import { Container, Grid } from '@mui/material';


const HomeSub = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  }, [])


  const getProjects = () => {
    get("/projects").then((data: any) => {
      setProjects(data.data.Items);
    })
  }

  return (
    <div>
      <Container>
        <Grid container direction="row">
          <ProjectsList projects={projects}></ProjectsList>
        </Grid>
      </Container>
    </div>
  );
}



export default HomeSub;
