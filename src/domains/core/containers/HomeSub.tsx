import React, { useEffect, useState } from 'react';
import { Project } from '../models';
import { ProjectsList } from '../components';
import { get } from 'app/api';
import { Container, Grid } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';


const HomeSub = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const { user } = useAuth0();

  useEffect(() => {

    const getProjects = () => {
      get("/projects/user/" + user?.email).then((data: any) => {
        setProjects(data.data.Items);
      })
    }

    getProjects()
  }, [user])

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
