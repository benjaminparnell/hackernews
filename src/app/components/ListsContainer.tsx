import * as React from 'react';
import { useState, lazy, Suspense } from 'react';
import { StoryType } from '../types';
import Loading from './Loading';
import TypeSelector from './TypeSelectorContainer';
import Visibility from './Visibility';
const ListContainer = lazy(() => import('./ListContainer'));

const ListsContainer = () => {
  const [activeTab, setActiveTab] = useState<StoryType>('top');

  return (
    <React.Fragment>
      <TypeSelector setActiveTab={setActiveTab} />

      <Visibility visible={activeTab === 'new'}>
        <Suspense fallback={<Loading />}>
          <ListContainer type="new" />
        </Suspense>
      </Visibility>

      <Visibility visible={activeTab === 'top'}>
        <Suspense fallback={<Loading />}>
          <ListContainer type="top" />
        </Suspense>
      </Visibility>
    </React.Fragment>
  );
};

export default ListsContainer;
