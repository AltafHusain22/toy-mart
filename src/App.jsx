import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
    <App>
      <Helmet>
        <title>Toys-Mart</title>
      </Helmet>
    </App>
  </HelmetProvider>
  )
};

export default App;
