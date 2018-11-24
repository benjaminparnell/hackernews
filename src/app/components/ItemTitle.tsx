import * as React from 'react';
import { parse } from 'url';
import { ListCardLink } from './List';

type Props = {
  title: string;
  url?: string;
};

const ItemTitle = ({ title, url }: Props) => (
  <h3>
    <ListCardLink href={url} target="_blank">
      {title} {url ? `(${parse(url).host})` : ''}
    </ListCardLink>
  </h3>
);

export default ItemTitle;
