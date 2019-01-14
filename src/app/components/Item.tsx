import * as React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import styled from 'styled-components';
import { Post } from '../types';
import AuthorTimestamp from './AuthorTimestamp';
import Visibility from './Visibility';
import Loading from './Loading';
import api from '../api';
import useToggle from '../hooks/useToggle';

type ItemProps = {
  id: number;
  level: number;
};

const ItemResource = createResource<number, Post>(id => api.item(id));

const ItemWrapper = styled.div<{ level: number }>`
  ${props => props.level && `margin-left: ${props.level * 15}px;`}
  margin-bottom: 30px;
`;

const Item = ({ id, level }: ItemProps) => {
  const [hidden, setHidden] = useToggle();
  const item = ItemResource.read(id);

  return (
    <ItemWrapper level={level}>
      <p>
        <AuthorTimestamp by={item.by} time={item.time} />{' '}
        <span onClick={() => setHidden()}>
          {hidden ? `[+${item.kids ? item.kids.length + 1 : '1'}]` : `[-]`}
        </span>
      </p>

      <Visibility visible={!hidden}>
        <div dangerouslySetInnerHTML={{ __html: item.text }} />

        {item.kids &&
          item.kids.map(kidId => (
            <React.Suspense key={kidId} fallback={<Loading />}>
              <Item id={kidId} level={level + 1} />
            </React.Suspense>
          ))}
      </Visibility>

      {level === 0 && <hr />}
    </ItemWrapper>
  );
};

export default Item;
