import * as React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { StoryType } from '../types';
import api from '../api';

const APIResource = createResource<number, StoryType>(id => api.item(id));

const ItemContainer = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const item = APIResource.read(parseInt(id, 10));
  return <h2>{item.title}</h2>;
};

export default ItemContainer;
