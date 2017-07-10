import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { BrowserRouter, Route } from 'react-router-dom';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://graphql.example.com',
  }),
});
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
