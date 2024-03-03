import React, { useEffect, useState } from 'react';
import { Project, Room } from '../models';
import { get } from 'app/api';
import { Container, Grid, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';


interface ownProps {
  project?: Project;
}

type Props = ownProps;

const HomeSubRooms = (props: Props) => {
  const { project } = props;
  const [projects, setProjects] = useState<Project[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
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
          {project?.rooms!.map((room: Room, index: number) => {
            return (
              <Typography>{room.name}</Typography>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSubRooms;
