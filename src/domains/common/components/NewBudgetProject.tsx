import React, { Fragment, useState } from "react";
import { Grid, makeStyles, createStyles, Avatar, Typography, useTheme, useMediaQuery, Theme, Button, Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { ProjectBudget } from "domains/core/models";
import { background1 } from "assets";
import { PageContainer } from "domains/core/containers";
import { useForm } from "react-hook-form";
import { saveProjectBudget } from "domains/core/coreSlice";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { RootState } from "app/store";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: 20,
      border: '#707070 solid 1px',
      background: '#FFFFFF',
      // margin: '5px'
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
      marginBottom: 10,
      marginTop: 10
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
    bottomTextContainer: {
      alignContent: 'flex-end'
    },
    bottomText: {
      fontWeight: 'bolder',
      fontFamily: 'Arial',
      letterSpacing: 2
    },
    listContainer: {
      padding: '10px 10px',
      backgroundColor: '#DDDDDD',
      margin: '50px 50px',
      borderRadius: 20,
      textAlign: 'center'
    },
    containerAvatar: {
      margin: '15px 0px'
    },
    avatarLarge: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    containerBorder: {
      // borderRadius: 20,
      borderTop: '#707070 solid 1px',
      borderBottom: '#707070 solid 1px',
      background: 'transparent',
      textAlign: 'left',
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    labelInput: {
      color: '#7B7B7B'
    },
    containerBorderBottom: {
      // borderRadius: 20,
      // borderTop: '#707070 solid 1px',
      borderBottom: '#707070 solid 1px',
      background: 'transparent',
      textAlign: 'left',
      paddingLeft: 20,
      paddingTop: 10
    },
    containerBorderNone: {
      // borderRadius: 20,
      // borderTop: '#707070 solid 1px',
      // borderTop: '#707070 solid 1px',
      background: 'transparent',
      textAlign: 'left',
      // paddingLeft: 20,
      paddingTop: 10
    },
    containerButton: {
      height: '5%'
    },
    buttonUpload: {
      background: '#4A7A5A',
      color: 'white',
      textTransform: "capitalize",
      padding: '0px 30px',
      borderRadius: 20,
      marginBottom: 10
    },
    input: {
      border: 'none'
    },
    root: {
      background: theme.palette.common.white,
      color: theme.palette.common.black,
    },
  })
);

export interface DispatchProps {
  saveProjectBudget: typeof saveProjectBudget;
}

type Props = DispatchProps;
const NewBudgetProject = (props: Props) => {
  const classes = useStyles();
  const { saveProjectBudget } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false);
  const { user } = useAuth0();

  const handleCloseSnackbar = () => {
    setOpen(false)
  }

  const onSubmit = (data: any) => {
    // console.log("DATA", data);
    data.email = user.email;
    const projectNew: ProjectBudget = data;
    saveProjectBudget(projectNew); 
    setOpen(true);
  }

  return (
    <PageContainer background={smallScreen ? "waiting-background-list" : "waiting-back"}>
      {smallScreen ?
        <Grid container>
          {/* <Grid item container xs={12} justify="center" className={classes.containerAdd} direction="row" onClick={() => toUploadPhoto()}>
            <AddAPhotoIcon className={classes.addButton} />
            <Typography variant="subtitle1" className={classes.addText}>
              Add spending.
            </Typography>
          </Grid> */}
          <Grid item container xs={12} className={classes.listContainer} justify="center">
            <Typography variant="subtitle1" className={classes.boldText}>New Project</Typography>
            <Grid xs={12} item className={classes.container}>
              <Grid item container xs={12} justify="center" className={classes.containerAvatar}>
                <Avatar className={classes.avatarLarge}>
                  <img src={background1} />
                </Avatar>
              </Grid>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} className={classes.containerBorder}>
                  <Typography variant="subtitle2" className={classes.labelInput}>Project Name</Typography>
                  <input {...register("name")} placeholder="5240 Downs Lane" className={classes.input}/>
                  {/* <Typography variant="subtitle1">5240 Downs Lane</Typography> */}
                </Grid>
                <Grid item xs={12} className={classes.containerBorderBottom}>
                  <Typography variant="subtitle2" className={classes.labelInput}>Project Type</Typography>
                  <input {...register("type")} placeholder="Kitchen remodelling" className={classes.input}/>
                  {/* <Typography variant="subtitle1">Kitchen remodelling</Typography> */}
                </Grid>
                <Grid item xs={12} className={classes.containerBorderBottom}>
                  <Typography variant="subtitle2" className={classes.labelInput}>Budget Target</Typography>
                  <input {...register("budgetTarget")} placeholder="15000" className={classes.input}/>
                  {/* <Typography variant="subtitle1">15 000 USD</Typography> */}
                </Grid>
                <Grid item xs={12} className={classes.containerBorderBottom}>
                  <Typography variant="subtitle2" className={classes.labelInput}>Date project start</Typography>
                  {/* <Typography variant="subtitle1">26-04-2022</Typography> */}
                  <input {...register("dateStart")} placeholder="26-04-2022" className={classes.input} type="date"/>
                </Grid>
                <Grid item xs={12} className={classes.containerBorderBottom}>
                  <Typography variant="subtitle2" className={classes.labelInput}>Currency</Typography>
                  <input {...register("currency")} placeholder="USD" className={classes.input}/>
                  {/* <Typography variant="subtitle1">USD</Typography> */}
                </Grid>
                <Grid item xs={12} className={classes.containerBorderNone}>
                  <Grid item container xs={12} justify="center" className={classes.containerButton}>
                    {/* <Button className={classes.buttonUpload} component="span">Save</Button> */}
                    <input type="submit" className={classes.buttonUpload} value="Save" />
                  </Grid>
                </Grid>
              </form>

            </Grid>
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.bottomTextContainer}>
            <Typography variant="subtitle1" className={classes.bottomText}>Build on budget.</Typography>
          </Grid>
        </Grid>
        : null}
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <SnackbarContent
          message="Your project has been created"
          className={classes.root}
          action={
            <Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar} style={{ color: 'black' }}>
                <Close fontSize="small" />
              </IconButton>
            </Fragment>
          } />

      </Snackbar>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<{}, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      // listProjects: state.domains.core.projectsBudget,
    }),
    {
      saveProjectBudget
    }
  )
)(NewBudgetProject);

export default container;

// export default NewBudgetProject;