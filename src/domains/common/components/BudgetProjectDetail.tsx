import React, { Fragment } from "react";
import { Grid, makeStyles, createStyles, Avatar, Typography } from "@material-ui/core";
import { ProjectBudget } from "domains/core/models";
import { background1 } from "assets";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      borderRadius: 20,
      border: '#707070 solid 1px',
      background: '#FFFFFF',
      margin: '5px'
    },
    avatarContainer: {
      paddingTop: 15
    },
    textContainer: {
      paddingTop: 15
    },
    boldText: {
      fontWeight: 'bolder',
      lineHeight: 0.8
    },
    redText: {
      color: '#F20000',
      lineHeight: 1.2
    },
    greenText: {
      color: '#02BA02',
      lineHeight: 1.2
    },
    iconAdd: {
      color: '#608657',
      height: '100%',
      marginRight: 15
    },
    containerDetails: {
      padding: '20px 20px'
    }
  })
);

export interface OwnProps {
  project?: ProjectBudget;
}

type Props = OwnProps;
const BudgetProjectDetail = (props: Props) => {
  const classes = useStyles();
  const { project } = props;

  return (
    <Grid container className={classes.container}>
      <Fragment>
        <Grid item container xs={3} justify="center" className={classes.avatarContainer}>
          <Avatar>
            <img src={background1} />
          </Avatar>
        </Grid>
        <Grid item xs={9} className={classes.textContainer}>
          <Typography variant="subtitle1" className={classes.boldText}>Project | {project!.name}</Typography>
          <Typography variant="subtitle1" >Type |. {project!.type}</Typography>
          <Typography variant="subtitle1" className={classes.boldText}>Budget target | {project!.budgetTarget} {project!.currency}</Typography>
          <br />
          <Typography variant="subtitle1" className={project!.spendedPercentage >= 70 ? classes.redText : classes.greenText}>Spended | {project!.spended} {project!.currency}</Typography>
          <Typography variant="subtitle1" className={project!.spendedPercentage >= 70 ? classes.redText : classes.greenText}>Total spended | {project!.spendedPercentage} %</Typography>
        </Grid>
        <Grid xs={12} item container direction="column" className={classes.containerDetails}>
          <Typography variant="subtitle1" className={classes.boldText}>Material spending</Typography>
          <Typography variant="subtitle1">Type |. {project!.type}</Typography>
          <br />
          <Typography variant="subtitle1" >04/10   Paint Home depot   2 500 USD</Typography>
          <br />
          <Typography variant="subtitle1" >04/09   Brushes Home depot   1 500 USD</Typography>
          <br />
          <Typography variant="subtitle1" className={classes.boldText}>Labor spending</Typography>
          <Typography variant="subtitle1">Type |. {project!.type}</Typography>
          <br />
          <Typography variant="subtitle1" >04/10   Jhon P. Week 1   2 500 USD</Typography>
        </Grid>
      </Fragment>
    </Grid>
  )
}

export default BudgetProjectDetail;