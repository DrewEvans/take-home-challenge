import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import Home from './pages/Home';
import SalesPage from './pages/SalesPage';
import SearchPage from './pages/SearchPage';

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
          <Route exact path='/search' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
