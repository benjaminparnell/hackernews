import * as React from 'react';
import { useState, lazy, Suspense } from 'react';
import { StoryType } from '../types';
import Loading from './Loading';
import TypeSelector from './TypeSelectorContainer';
import Visibility from './Visibility';
const ListContainer = lazy(() => import('./ListContainer'));
const TYPES: StoryType[] = ['new', 'top'];

const ListsContainer = () => {
  const [activeTab, setActiveTab] = useState<StoryType>('top');

  return (
    <React.Fragment>
      <TypeSelector setActiveTab={setActiveTab} activeTab={activeTab} />

      {TYPES.map(type => (
        <Visibility key={type} visible={activeTab === type}>
          <Suspense fallback={<Loading />}>
            <ListContainer type={type} />
          </Suspense>
        </Visibility>
      ))}
    </React.Fragment>
  );
};

export default ListsContainer;
