import { createStyles, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React, { useEffect } from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { ProjectBudget } from "domains/core/models";
import BudgetProject from "./BudgetProject";
import { getProjectsBudget } from "domains/core/coreSlice";
import { compose } from "recompose";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "app/store";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from 'react-i18next';


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


interface DispatchProps {
  getProjectsBudget: typeof getProjectsBudget;
}

interface StateProps {
  listProjects: ProjectBudget[] | undefined;
}

type Props = StateProps & DispatchProps;
const ListProjectsBudget = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();
  // const listProjects = projectsBudget;
  const { getProjectsBudget, listProjects } = props;
  const { user, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user['http://ourhouseplus.com/roles'].includes('admin')) {
        if(user.email){
          getProjectsBudget(user.email);
        } 
      } else {
        history.push("/register")
      }

    }
  }, [getProjectsBudget, user])

  const toUploadPhoto = () => {
    history.push("/uploadPhoto");
  }

  return (
    <PageContainer background={smallScreen ? "waiting-background-list" : "waiting-back"}>
      {smallScreen ?
        <Grid container>
          <Grid item container xs={12} justify="center" className={classes.containerAdd} direction="row" onClick={() => toUploadPhoto()}>
            <AddAPhotoIcon className={classes.addButton} />
            <Typography variant="subtitle1" className={classes.addText}>
              {t('add_spending')}.
            </Typography>
          </Grid>
          <Grid item container xs={12} className={classes.listContainer}>
            {listProjects ? listProjects!.map((pr) => {
              return <BudgetProject project={pr} type="item" />
            }, []) : null}
            <BudgetProject type="button" />
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.bottomTextContainer}>
            <Typography variant="subtitle1" className={classes.bottomText}>{t('build_on_budget')}.</Typography>
          </Grid>
        </Grid>
        : null}
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      listProjects: state.domains.core.projectsBudget,
    }),
    {
      getProjectsBudget
    }
  )
)(ListProjectsBudget);

export default container;

// export default ListProjectsBudget;