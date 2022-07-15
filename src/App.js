import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import './App.css';
import Home from './pages/Home';
import SalesPage from './pages/SalesPage';

const client = new ApolloClient({
  uri: 'https://staging.sparrow.escapes.tech/graphql/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/sale/:id' element={<SalesPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
