import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import Layout from './components/Layout';
import Loading from './components/Loading';
const ListsContainer = React.lazy(() => import('./components/ListsContainer'));
const ItemContainer = React.lazy(() => import('./components/ItemContainer'));

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.background};
  }
`;

render(
  <Layout>
    <GlobalStyle />
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Route path="/" exact={true} component={() => <ListsContainer />} />
        <Route
          path="/item/:id"
          render={props => (
            <ItemContainer id={parseInt(props.match.params.id, 10)} />
          )}
        />
      </React.Suspense>
    </Router>
  </Layout>,
  document.getElementById('root')
);
