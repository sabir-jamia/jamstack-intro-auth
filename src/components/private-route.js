import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
   const identity = useIdentityContext();

   if (!identity?.isLoggedIn && location.pathname !== '/dashboard/login') {
      navigate('/dashboard/login', { replace: true });
      return null;
   }

   return <Component {...rest} />;
};

export default PrivateRoute;
