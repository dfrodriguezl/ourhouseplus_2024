import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { FormMail } from '../components';


const MailchimpFormContainer = () => {

  const postUrl = 'https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9';

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