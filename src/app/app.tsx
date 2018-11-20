import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import ListsContainer from './components/ListsContainer';

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
`;

render(
  <React.ConcurrentMode>
    <Wrapper>
      <ListsContainer />
    </Wrapper>
  </React.ConcurrentMode>,
  document.getElementById('root')
);
