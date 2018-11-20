import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
const { Suspense, lazy } = React;
import Loading from './components/Loading';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const ListContainer = lazy(() => import('./components/ListContainer'));

render(
  <Wrapper>
    <h1>Hacker News</h1>
    <Suspense fallback={Loading}>
      <ListContainer type="top" />
    </Suspense>
  </Wrapper>,
  document.getElementById('root')
);
