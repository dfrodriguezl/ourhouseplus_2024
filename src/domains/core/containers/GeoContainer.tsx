import { Dialog } from '@material-ui/core';
import { PageContainer } from '.';
import { Geolocation } from 'domains/core/components';

interface ownProps {
  open: boolean;
  location?: string;
}


const GeoContainer = (props: ownProps) => {

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
