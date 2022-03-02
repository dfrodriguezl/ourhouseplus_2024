import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, TableContainer, TableRow, TableCell, TableBody, Table, useTheme, useMediaQuery, TableHead, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { WhiteBuildings, Messages } from 'assets';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const styles = makeStyles((theme: Theme) => ({
  title: {
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 40
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
  },
  boldText: {
    fontWeight: 'bolder'
  },
  itemText: {
    textTransform: 'capitalize',
    color: '#6F6E6E'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: 'transparent',
    color: '#6F6E6E',
    textTransform: 'none',
    padding: '-10px 10px',
    borderColor: '#6F6E6E',
    lineHeight: 0,
    margin: '10px 5px 10px'
  },
}));

const HomeSub3 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toGetStarted = () => {
    window.scrollTo(0,0);
  }


  return (
    <div className={!smallScreen ? isWaiting ? "home-sub-1" : "home-sub-1-waiting" : "home-sub-1-small"}>
      <Container >
        <Grid container>
          {!smallScreen ?
            <Grid item xs={6} className={classes.title} style={{ textAlign: 'justify' }}>
              <img src={WhiteBuildings} width="60%" style={{ position: 'relative' }} alt="white-buildings" />
              <img src={Messages} width="60%" style={{ position: 'relative', left: '130px', top: '-100px' }} alt="messages" />
            </Grid> : null
          }

          <Grid item xs={!smallScreen ? 6 : 12} style={{ marginBottom: !smallScreen ? 40 : 10 }}>
            <Box component="h4" color="primary">REAL-TIME FEATURES</Box>
            <TableContainer>
              <Table size="small" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.boldText}>Feature</TableCell>
                    <TableCell align="center" className={classes.boldText}>basic</TableCell>
                    <TableCell align="center" className={classes.boldText}>premium</TableCell>
                  </TableRow>
                </TableHead>
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
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">3D Project custom facade</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
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
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">Client teaser - custom PDF</TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <HighlightOffOutlinedIcon className={classes.iconGray} />
                    </TableCell>
                    <TableCell classes={{ root: classes.rootCell }} padding="none" align="center">
                      <CheckCircleIcon />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </TableContainer>
            {smallScreen ?
              <Button className={classes.buttonGreen} variant="outlined" size="small" onClick={() => toGetStarted()}>
                <p className={classes.itemText}>Get Started</p>
              </Button> : null
            }

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub3;
