import * as React from 'react';
import { Post } from './ListContainer';
import { parse } from 'url';

type Props = {
  posts: Post[];
};

const ListCard = ({
  index,
  title,
  by,
  url,
  score,
  descendants
}: Post & { index: number }) => (
  <div>
    <h2>
      {index}. <a href={url}>{title}</a> {url && `(${parse(url).host})`}
    </h2>
    <p>
      {score} points by {by} |{' '}
      {descendants ? `${descendants} comments` : 'discuss'}
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
