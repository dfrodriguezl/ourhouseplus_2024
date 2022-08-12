import { createStyles, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { ProjectBudget } from "domains/core/models";
import BudgetProjectDetail from "./BudgetProjectDetail";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import { RootState } from "app/store";
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

interface RouteProps {
  id: string;
}

interface StateProps {
  listProjects: ProjectBudget[] | undefined;
}

type Props = StateProps & RouteComponentProps<RouteProps>;
const ProjectBudgetContainer = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { match: { params }, listProjects } = props;
  const idProject = params.id;
  const projectSelected = listProjects ? listProjects.filter((o) => String(o.id) === String(idProject)) : undefined;
  const history = useHistory();
  const { t } = useTranslation();
  // const projectSelected = projectsBudget.filter((o) => o.id === Number(idProject));

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
            {/* {listProjects.map((pr) => {
              return <BudgetProject project={pr} type="item" />
            }, [])} */}
            {projectSelected ?
              <BudgetProjectDetail project={projectSelected[0]} />
              : null}

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
  connect<StateProps, {}, {}, RootState>(
    (state: RootState) => ({
      listProjects: state.domains.core.projectsBudget,
    }),
    {
    }
  )
)(ProjectBudgetContainer);

export default container;

// export default ProjectBudgetContainer;