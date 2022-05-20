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
  const postUrl = 'https://ourhouseplus.us13.list-manage.com/subscribe/post?u=73c11ec3ce5675332aa57238e&amp;id=0a9ff0b07f';

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