import React from 'react';
import history from 'app/history';
import { Auth0Provider, AppState } from '@auth0/auth0-react';

interface OwnProps {
  children: any;
}

type Props = OwnProps;
const Auth0 = (props: Props) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + '/home'}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0;
