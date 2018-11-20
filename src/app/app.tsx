import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import ListContainer from './components/ListContainer';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

render(
  <Wrapper>
    <h1>Hacker News</h1>
    <ListContainer type="top" />
  </Wrapper>,
  document.getElementById('root')
);
