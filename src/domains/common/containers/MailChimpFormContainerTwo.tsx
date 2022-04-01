import { PropertyDescriptorParsingType } from 'html2canvas/dist/types/css/IPropertyDescriptor';
import { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { FormMail, PopupMail } from '../components';

interface ownProps {
  open?: any;
  handleClose?: any;
}

type Props = ownProps;
const MailchimpFormContainerTwo = (props: Props) => {
  const { open, handleClose } = props;
  const postUrl = 'https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9';

  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    handleScroll()
  }, [])



  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <PopupMail
          status={status}
          message={message}
          onValidated={(formData: any) => subscribe(formData)}
          open={open}
          handleClose={handleClose}
        />
      )}
    />
  )
}

export default MailchimpFormContainerTwo;