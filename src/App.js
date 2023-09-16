import React, { useEffect } from 'react';
import ClientLayout from './layouts/client/clientlayout';
import UserLayout from './layouts/user/userLayout';
import { ApolloProvider } from '@apollo/client';
import WebFont from 'webfontloader';
import client from './apollo/client';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Work Sans', 'Chilanka'],
      },
    });
  }, []);

  return (
    <div className="App">
      <ApolloProvider client={client}>
        {/* TODO: change to a proper view */}
        <ClientLayout />
        {/* <UserLayout /> */}
      </ApolloProvider>
    </div>
  );
};

export default App;
