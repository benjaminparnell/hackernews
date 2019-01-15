import * as React from 'react';
import styled from 'styled-components';
import { StoryType } from '../types';

type Props = {
  setActiveTab: (type: StoryType) => void;
};

const TypeButton = styled.button`
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 1.2em;
  padding: 0.75em 1.1em;
  margin-right: 1em;
  background-color: transparent;
`;

const TYPES: { label: string; type: StoryType }[] = [
  { label: 'Top', type: 'top' },
  { label: 'New', type: 'new' }
];

const TypeSelector = ({ setActiveTab }: Props) => (
  <div>
    {TYPES.map(({ label, type }) => (
      <TypeButton key={type} type="button" onClick={() => setActiveTab(type)}>
        {label}
      </TypeButton>
    ))}
  </div>
);

export default TypeSelector;
