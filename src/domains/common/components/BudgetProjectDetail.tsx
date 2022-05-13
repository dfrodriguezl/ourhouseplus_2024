import React, { Fragment, useEffect, useState } from "react";
import { Grid, makeStyles, createStyles, Avatar, Typography, IconButton } from "@material-ui/core";
import { ProjectBudget } from "domains/core/models";
import { background1 } from "assets";

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
    },
    orangeText: {
      color: '#ffa500',
      lineHeight: 1.2
    },
  })
);

export interface OwnProps {
  project?: ProjectBudget;
}

type Props = OwnProps;
const BudgetProjectDetail = (props: Props) => {
  const classes = useStyles();
  const { project } = props;
  const [totalSpended, setTotalSpended] = useState(0);
  const [totalSpendedPercentage, setTotalSpendedPercentage] = useState(0);

  useEffect(() => {
    getTotalSpended();
  },[])

  const getTotalSpended = () => {
    let total = 0;
    if(project?.spends){
      project.spends.map((s) => {
        total = total + s.quantity!;
      },[])
      setTotalSpended(total);
      setTotalSpendedPercentage(Math.round((total/project.budgetTarget)*100));
    }
  }

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
          <Typography variant="subtitle1" className={totalSpendedPercentage>= 90 ? classes.redText : totalSpendedPercentage >= 70 ? classes.orangeText : classes.greenText}>Spended | {totalSpended} {project!.currency}</Typography>
          <Typography variant="subtitle1" className={totalSpendedPercentage>= 90 ? classes.redText : totalSpendedPercentage >= 70 ? classes.orangeText : classes.greenText}>Total spended | {totalSpendedPercentage} %</Typography>
        </Grid>
        <Grid xs={12} item container direction="column" className={classes.containerDetails}>
          <Typography variant="subtitle1" className={classes.boldText}>Material spending</Typography>
          <Typography variant="subtitle1">Type |. {project!.type}</Typography>
          <br />
          {project?.spends ? project?.spends!.map((s) => {
            return s.type === 1 ?
            <Fragment>
              <Typography variant="subtitle1" >{new Date(s.date!).getDate() + "/" + (new Date(s.date!).getMonth() + 1)}   {s.detail}   {s.quantity} {project!.currency}</Typography>
              <br />
            </Fragment> : null
          }, []) : null}

          <Typography variant="subtitle1" className={classes.boldText}>Labor spending</Typography>
          <Typography variant="subtitle1">Type |. {project!.type}</Typography>
          <br />
          {project?.spends ? project?.spends!.map((s) => {
            return s.type === 2 ?
            <Fragment>
              <Typography variant="subtitle1" >{new Date(s.date!).getDate() + "/" + (new Date(s.date!).getMonth() + 1)}   {s.detail}   {s.quantity} USD</Typography>
              <br />
            </Fragment> : null
          }, []) : null}
        </Grid>
      </Fragment>
    </Grid>
  )
}

export default BudgetProjectDetail;