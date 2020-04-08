import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from '@reach/router';

const RouteLogin = ({ showModal }) => {
   const identity = useIdentityContext();

   if (identity?.isLoggedIn) {
      navigate('/dashboard/secret', { replace: true });
   }

   return (
      <>
         <h1>Login or Sign Up</h1>
         <button onClick={showModal}>Log In</button>
      </>
   );
};

export default RouteLogin;
