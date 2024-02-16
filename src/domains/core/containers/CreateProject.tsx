import React, { Fragment, useState } from 'react';
import { Grid, makeStyles, Step, Theme, Typography } from '@material-ui/core';
import { Project } from "../models";
import { PageContainer, StepsContainer } from '.';
import Step1Project from '../components/Step1Project';
import { Step2Project } from '../components';
import Step3Project from '../components/Step3Project';


const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    background: '#FFFFFF99 0% 0% no-repeat padding-box',
    color: 'gray',
    border: '1px solid #707070',
    margin: '3vh',
    borderRadius: '5px'
  },
  textContainerStyle: {
    padding: '20px'
  },
  containerButtonStyle: {
    textAlign: 'center'
  }
}));

interface OwnProps {
  children?: any;
}

type Props = OwnProps;
export default function CreateProject(props: Props) {
  const { children } = props;
  const [step, setStep] = useState(1);
  const [project, setProject] = useState<Project | undefined>(undefined);
  const classes = useStyles();

  return (
    <PageContainer background="create-project">
      <Grid container justify="center">
        <StepsContainer step={step} project={project}>
          {step == 1 ?
            <Step1Project setStep={setStep} setProject={setProject}/> :
            step == 2 ?
              <Step2Project setStep={setStep} setProject={setProject} project={project}/> :
              step == 3 ?
              <Step3Project /> :
              null}
        </StepsContainer>
      </Grid>
    </PageContainer>
  );
}