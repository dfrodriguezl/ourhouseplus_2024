import { Fragment } from 'react';
import { makeStyles, createStyles, Theme, Dialog } from '@material-ui/core';
import { PageContainer } from '.';
import { Geolocation } from 'domains/core/components';
// import { RouteComponentProps, useParams } from 'react-router-dom';
// import { PageContainer, TopPanel, GeneralParameters } from 'domains/core/containers';
// import { MapGeo } from 'domains/core/components';
// import { download, sum } from 'assets';
// import EditIcon from '@material-ui/icons/Edit';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import clsx from 'clsx';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

interface ownProps {
  open: boolean;
  location?: string;
}


const GeoContainer = (props: ownProps) => {

  const classes = useStyles();
  const { open, location } = props;


  return (
    <Dialog fullScreen open={open} >
      <PageContainer background="black-model" >
        <Geolocation location={location} />
      </PageContainer>
    </Dialog>
  )
}



export default GeoContainer;
