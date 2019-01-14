import * as React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import Loading from './Loading';
import AuthorTimestamp from './AuthorTimestamp';
import Points from './Points';
import ItemTitle from './ItemTitle';
import { Post } from '../types';
import api from '../api';
import Item from './Item';

const ItemResource = createResource<number, Post>(id => api.item(id));

type ItemContainerProps = {
  id: number;
};

const ItemContainer = ({ id }: ItemContainerProps) => {
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
      {item.kids &&
        item.kids.map(kidId => (
          <React.Suspense key={kidId} fallback={<Loading />}>
            <Item id={kidId} level={0} />
          </React.Suspense>
        ))}
    </div>
  );
};

export default ItemContainer;
