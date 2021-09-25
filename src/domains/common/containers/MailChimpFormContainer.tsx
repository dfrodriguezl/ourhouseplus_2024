import { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { FormMail } from '../components';


const MailchimpFormContainer = () => {

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
  },[])

  

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <FormMail
          status={status}
          message={message}
          onValidated={(formData: any) => subscribe(formData)}
        />
      )}
    />
  )
}

export default MailchimpFormContainer;