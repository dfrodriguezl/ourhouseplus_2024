import { createStyles, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { projectsBudget } from "domains/core/models";
import BudgetProject from "./BudgetProject";


const useStyles = makeStyles(() =>
  createStyles({
    containerAdd: {
      marginTop: 20
    },
    addButton: {
      marginRight: 20
    },
    addText: {
      fontWeight: 'bolder'
    },
    bottomTextContainer: {
      alignContent: 'flex-end'
    },
    bottomText: {
      fontWeight: 'bolder',
      fontFamily: 'Arial',
      letterSpacing: 2
    },
    listContainer: {
      padding: '10px 30px'
    },

  })
);

const ListProjectsBudget = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const listProjects = projectsBudget;

  return (
    <PageContainer background={smallScreen ? "waiting-background-list" : "waiting-back"}>
      {smallScreen ?
        <Grid container>
          <Grid item container xs={12} justify="center" className={classes.containerAdd} direction="row">
            <AddAPhotoIcon className={classes.addButton} />
            <Typography variant="subtitle1" className={classes.addText}>
              Add spending.
            </Typography>
          </Grid>
          <Grid item container xs={12} className={classes.listContainer}>
            {listProjects.map((pr) => {
              return <BudgetProject project={pr} type="item" />
            }, [])}
            <BudgetProject type="button" />
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.bottomTextContainer}>
            <Typography variant="subtitle1" className={classes.bottomText}>Build on budget.</Typography>
          </Grid>
        </Grid>
        : null}
    </PageContainer>
  )
}

export default ListProjectsBudget;