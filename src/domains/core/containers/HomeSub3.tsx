import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, Avatar, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FeasibilityIcon, FinancialIcon, PdfIcon, PreArchitectureIcon, SquareIcon, BuildingIcon, WhiteBuildings, Messages } from 'assets';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const styles = makeStyles((theme: Theme) => ({
  title: {
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 40
  },
  avatarGray: {
    backgroundColor: "#989696",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  avatarBlack: {
    backgroundColor: "#000000",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  minContent: {
    width: 'min-content',
    textAlign: 'center',
    marginRight: theme.spacing(1),
    paddingLeft: 50,
    paddingRight: 50
  },
  textSize: {
    fontSize: 13,
    color: "#666666"
  },
  subtitle: {
    paddingTop: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  rootCell: {
    borderBottom: "1px solid black"
  },
  table: {
    "& .MuiTableCell-root": {
      border: "2px solid black"
    }
  },
  iconGray: {
    color: "#A0A0A0"
  }
}));

const HomeSub3 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;


  return (
    <div className={isWaiting ? "home-sub-1" : "home-sub-1-waiting"}>
      <Container >
        <Grid container>
          <Grid item xs={6} className={classes.title} style={{ alignSelf: 'center'}}>
            <img src={WhiteBuildings} width="50%" style={{ position: 'relative' }} />
            <img src={Messages} width="50%" style={{ position: 'relative', left: '-200px' }} />
          </Grid>
          <Grid item xs={6} style={{ marginBottom: 40 }}>
            <Box component="h4" color="primary">REAL-TIME FEATURES</Box>
            <TableContainer>
              <Table size="small" className={classes.table}>
                <TableBody>
                  <TableRow >
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Property & lot zoning info</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Demographic zone data</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Programatic 3D project</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Units capacity</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Project floor plans - PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">3D Project facade</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Project floors plans -</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray}/>
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">3D Project custom facade</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray}/>
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Investor teaser - general</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Client teaser - general PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Investor teaser - custom</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray}/>
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Client teaser - custom PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray}/>
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </TableContainer>
          </Grid>
          {/* <Grid item container xs={12} style={{ justifyContent: 'center' }}>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={SquareIcon} width="30px" />
              </Avatar>
              <h4>LOT</h4>
              <p className={classes.textSize}>You own or will buy a property to develop.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={FeasibilityIcon} width="30px" />
              </Avatar>
              <h4>FEASIBILITY</h4>
              <p className={classes.textSize}>REA will analyse zoning codes & demographic data.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={PreArchitectureIcon} width="30px" />
              </Avatar>
              <h4>PRE-ARCHITECTURE</h4>
              <p className={classes.textSize}>REA will generate a project in real-time to access FAR, LUR and Units.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={FinancialIcon} width="20px" />
              </Avatar>
              <h4>FINANCIAL ANALYSIS</h4>
              <p className={classes.textSize}>With the project summary numbers given, make you financial analysis.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={PdfIcon} width="30px" />
              </Avatar>
              <h4>PROJECT TEASER</h4>
              <p className={classes.textSize}>REA create a project investor/bank and client teaser pdf.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={BuildingIcon} width="30px" />
              </Avatar>
              <h4>DEVELOPMENT</h4>
              <p className={classes.textSize}>Begin pre-sale, building permits of your new housing development.</p>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.subtitle}>
            <Box component="h3" color="primary">with rea</Box>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub3;
