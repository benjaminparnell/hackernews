import * as React from 'react';
import { useState } from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import AuthorTimestamp from './AuthorTimestamp';
import Points from './Points';
import ItemTitle from './ItemTitle';
import { Post } from '../types';
import api from '../api';

const ItemResource = createResource<number, Post>(id => api.item(id));

type Props = {
  id: number;
};

const ItemContainer = ({ id }: Props) => {
  const item = ItemResource.read(id);
  return (
    <div>
      <ItemTitle title={item.title} url={item.url} />
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
      <p>
        <Points score={item.score} /> by{' '}
        <AuthorTimestamp by={item.by} time={item.time} />
      </p>
      <hr />
      {item.kids && item.kids.map(kidId => <Item key={kidId} id={kidId} />)}
    </div>
  );
};

const Item = ({ id }: Props) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const item = ItemResource.read(id);

  return (
    <div>
      <p>
        <AuthorTimestamp by={item.by} time={item.time} />{' '}
        <span onClick={() => setHidden(!hidden)}>
          {hidden ? `[+${item.kids ? item.kids.length + 1 : '1'}]` : `[-]`}
        </span>
      </p>

      <div hidden={hidden} dangerouslySetInnerHTML={{ __html: item.text }} />
      <hr />
    </div>
  );
};

export default ItemContainer;
