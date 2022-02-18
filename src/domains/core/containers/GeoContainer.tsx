import { Dialog } from '@material-ui/core';
import { PageContainer } from '.';
import { Geolocation } from 'domains/core/components';


interface ownProps {
  open: boolean;
  location?: string;
  closeFunction?: any;
  type?: string;
  nextAction?: any;
}


const GeoContainer = (props: ownProps) => {

  const { open, location, closeFunction, type, nextAction } = props;

  return (
    <Dialog fullScreen open={open} >
      <PageContainer background="black-model" >
        <Geolocation location={location} close={closeFunction} title="Add project location" type={type!} nextAction={nextAction}/>
      </PageContainer>
    </Dialog>
  )
}



export default GeoContainer;
