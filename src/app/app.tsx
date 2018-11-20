import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import ListsContainer from './components/ListsContainer';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

render(
  <React.ConcurrentMode>
    <Wrapper>
      <h1>Hacker News</h1>
      <ListsContainer />
    </Wrapper>
  </React.ConcurrentMode>,
  document.getElementById('root')
);
