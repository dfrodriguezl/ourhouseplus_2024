import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

interface OwnProps {
  children: any;
}

type Props = OwnProps;
const Auth0 = (props: Props) => {
  const navigate = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0;
