import * as React from 'react';
import { useState, useEffect } from 'react';
import api from '../api';

import List from './List';
import Loading from './Loading';

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

type State = {
  loading: boolean;
  posts: Post[];
};

const ListContainer = ({ type }: Props) => {
  const [state, setState] = useState<State>({ loading: true, posts: [] });

  useEffect(
    () => {
      if (!state.loading) {
        setState({ ...state, loading: true });
      }

      api.stories(type).then(posts => setState({ posts, loading: false }));
    },
    [type]
  );

  return state.loading ? <Loading /> : <List posts={state.posts} />;
};

export default ListContainer;
