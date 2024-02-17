import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Project } from "../models";
import { PageContainer, StepsContainer } from '.';
import Step1Project from '../components/Step1Project';
import { Step2Project } from '../components';
import Step3Project from '../components/Step3Project';


interface OwnProps {
  children?: any;
}

type Props = OwnProps;
export default function CreateProject(props: Props) {
  const [step, setStep] = useState(1);
  const [project, setProject] = useState<Project | undefined>(undefined);

  return (
    <PageContainer background="create-project">
      <Grid container justify="center">
        <StepsContainer step={step} project={project}>
          {step === 1 ?
            <Step1Project setStep={setStep} setProject={setProject}/> :
            step === 2 ?
              <Step2Project setStep={setStep} setProject={setProject} project={project}/> :
              step === 3 ?
              <Step3Project /> :
              null}
        </StepsContainer>
      </Grid>
    </PageContainer>
  );
}