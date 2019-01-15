import * as React from 'react';
import { parse } from 'url';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Points from './Points';
import { Post } from '../types';

type Props = {
  posts: Post[];
};

export const ListCardLink = styled.a`
  color: ${props => props.theme.primary};

  &:visited {
    color: ${props => props.theme.secondary};
  }
`;

const ListCard = ({
  id,
  index,
  title,
  by,
  url,
  score,
  descendants
}: Post & { index: number }) => (
  <div>
    <h3>
      {index}.{' '}
      <ListCardLink href={url} target="_blank">
        {title}
      </ListCardLink>{' '}
      {url && `(${parse(url).host})`}
    </h3>
    <p>
      <Points score={score} /> by {by} |{' '}
      <Link to={`/item/${id}`}>
        {descendants ? `${descendants} comments` : 'discuss'}
      </Link>
    </p>
  </div>
);

const List = ({ posts }: Props) => (
  <div>
    {posts.map((post, index) => (
      <ListCard key={index} {...post} index={index + 1} />
    ))}
  </div>
);

export default List;
