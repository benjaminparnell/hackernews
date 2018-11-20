import * as React from 'react';
import styled from 'styled-components';

type Props = {
  setActiveTab: (type: 'new' | 'top') => void;
};

const TypeButton = styled.button`
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 1.2em;
  padding: 0.75em 1.1em;
  margin-right: 1em;
`;

const TypeSelector = ({ setActiveTab }: Props) => {
  return (
    <div>
      <TypeButton type="button" onClick={() => setActiveTab('top')}>
        Top
      </TypeButton>
      <TypeButton type="button" onClick={() => setActiveTab('new')}>
        New
      </TypeButton>
    </div>
  );
};

export default TypeSelector;
