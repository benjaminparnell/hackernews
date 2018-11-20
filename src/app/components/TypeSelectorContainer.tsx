import * as React from 'react';

type Props = {
  setActiveTab: (type: 'new' | 'top') => void;
};

const TypeSelector = ({ setActiveTab }: Props) => {
  return (
    <div>
      <button type="button" onClick={() => setActiveTab('top')}>
        Top
      </button>
      <button type="button" onClick={() => setActiveTab('new')}>
        New
      </button>
    </div>
  );
};

export default TypeSelector;
