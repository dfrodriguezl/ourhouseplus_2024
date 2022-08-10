import React, { Fragment, useEffect, useState } from "react";
import { Grid, makeStyles, createStyles, Avatar, Typography, IconButton } from "@material-ui/core";
import { ProjectBudget } from "domains/core/models";
import { background1 } from "assets";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory, withRouter } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProjectById } from "domains/shapeDiver/slice";
import { compose } from "recompose";
import { connect } from "react-redux";
import { RootState } from "app/store";
import { deleteProjectBudget } from "domains/core/coreSlice";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      borderRadius: 20,
      border: '#707070 solid 1px',
      background: '#FFFFFF',
      margin: '5px',
      paddingBottom: 15
    },
    avatarContainer: {
      paddingTop: 15
    },
    textContainer: {
      paddingTop: 15
    },
    boldText: {
      fontWeight: 'bolder',
      lineHeight: 0.8,
      marginBottom: 2
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
    orangeText: {
      color: '#ffa500',
      lineHeight: 1.2
    },
  })
);

export interface OwnProps {
  project?: ProjectBudget;
  type: string;
}

export interface DispatchProps {
  deleteProjectBudget: typeof deleteProjectBudget;
}

type Props = OwnProps & DispatchProps;
const BudgetProject = (props: Props) => {
  const classes = useStyles();
  const { project, type, deleteProjectBudget } = props;
  const [totalSpended, setTotalSpended] = useState(0);
  const [totalSpendedPercentage, setTotalSpendedPercentage] = useState(0);
  const { t } = useTranslation();

  const history = useHistory();

  const goToProject = (id: number) => {
    history.push("/detailProjectBudget/" + id)
  }

  const goToNewProject = () => {
    history.push("/newProject")
  }

  const deleteProject = () => {
    deleteProjectBudget(String(project?.id), String(project?.email))!;
  }

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
      {type === "item" ?
        <Fragment>
          <Grid item container xs={3} justify="center" className={classes.avatarContainer} >
            <Avatar>
              <img src={background1} />
            </Avatar>
            <IconButton>
              <DeleteIcon onClick={() => deleteProject()}/>
            </IconButton>
          </Grid>
          <Grid item xs={9} className={classes.textContainer} onClick={() => goToProject(project!.id)}>
            <Typography variant="subtitle1" className={classes.boldText}>{t('project')} | {project!.name}</Typography>
            <Typography variant="subtitle1" >{t('type')}  |. {project!.type}</Typography>
            <Typography variant="subtitle1" className={classes.boldText}>{t('budget_target')}  | {project!.budgetTarget} {project!.currency}</Typography>
            <Typography variant="subtitle2" className={classes.boldText}>{t('date_project_start')} | {project!.dateStart}</Typography>
            <br />
            <Typography variant="subtitle1" className={totalSpendedPercentage >= 90 ? classes.redText : totalSpendedPercentage >= 70 ? classes.orangeText : classes.greenText}>{t('spended')} | {totalSpended} {project!.currency}</Typography>
            <Typography variant="subtitle1" className={totalSpendedPercentage >= 90 ? classes.redText : totalSpendedPercentage >= 70 ? classes.orangeText : classes.greenText}>{t('total_spended')} | {totalSpendedPercentage} %</Typography>
          </Grid>
        </Fragment> :
        <Fragment>
          <Grid container justify="center" direction="row" alignItems="center" onClick={() => goToNewProject()}>
            <AddCircleIcon fontSize="large" className={classes.iconAdd} />
            <Typography variant="h6" className={classes.boldText}>
            {t('start_project')}.
            </Typography>
          </Grid>
        </Fragment>
      }


    </Grid>
  )
}

const container = compose<Props, OwnProps>(
  withRouter,
  connect<{}, DispatchProps, {}, RootState>(
    (state: RootState) => ({
    }),
    {
      deleteProjectBudget
    }
  )
)(BudgetProject);

export default container;

// export default BudgetProject;