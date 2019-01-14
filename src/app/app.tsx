import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Loading from './components/Loading';
const ListsContainer = React.lazy(() => import('./components/ListsContainer'));
const ItemContainer = React.lazy(() => import('./components/ItemContainer'));

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
`;

render(
  <Wrapper>
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
  </Wrapper>,
  document.getElementById('root')
);
