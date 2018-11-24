import * as React from 'react';
import timeago from 'timeago.js';

type Props = {
  time: number;
  by: string;
};

const AuthorTimestamp = ({ time, by }: Props) => (
  <React.Fragment>
    {by} {timeago().format(new Date(time * 1000))}
  </React.Fragment>
);

export default AuthorTimestamp;
