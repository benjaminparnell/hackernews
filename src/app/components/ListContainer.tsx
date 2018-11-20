import * as React from 'react';
import { useState, useEffect } from 'react';
import api from '../api';

import List from './List';

export type Post = {
  title: string;
  by: string;
  url: string;
  score: number;
  descendants: number;
};

type Props = {
  type: 'top' | 'new';
};

const ListContainer = ({ type }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.stories(type).then(setPosts);
  }, []);

  return <List posts={posts} />;
};

export default ListContainer;
