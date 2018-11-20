import * as React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import api from '../api';
import { StoryType, Post } from '../types';
import List from './List';

const APIResource = createResource<StoryType, Post[]>((type: StoryType) =>
  api.stories(type)
);

type Props = {
  type: StoryType;
};

const ListContainer = ({ type }: Props) => {
  const posts = APIResource.read(type);
  return <List posts={posts} />;
};

export default ListContainer;
