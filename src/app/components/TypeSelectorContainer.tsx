import * as React from 'react';
import styled from 'styled-components';
import { clearFix } from 'polished';
import { StoryType } from '../types';

type Props = {
  setActiveTab: (type: StoryType) => void;
  activeTab: StoryType;
};

const TypeButton = styled.button<{ active: boolean }>`
  border: 2px solid ${props => props.theme.primary};
  color: ${props =>
    props.active ? props.theme.background : props.theme.primary};
  font-size: 1.2em;
  padding: 0.75em 1.1em;
  width: 50%;
  background-color: ${props =>
    props.active ? props.theme.primary : 'transparent'};
`;

const ButtonWrapper = styled.div`
  ${clearFix()}
`;

const TYPES: { label: string; type: StoryType }[] = [
  { label: 'Top', type: 'top' },
  { label: 'New', type: 'new' }
];

const TypeSelector = ({ setActiveTab, activeTab }: Props) => (
  <ButtonWrapper>
    {TYPES.map(({ label, type }) => (
      <TypeButton
        key={type}
        type="button"
        onClick={() => setActiveTab(type)}
        active={activeTab === type}
      >
        {label}
      </TypeButton>
    ))}
  </ButtonWrapper>
);

export default TypeSelector;
