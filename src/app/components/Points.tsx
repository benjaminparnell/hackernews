import * as React from 'react';

type Props = {
  score: number;
};

const Points = ({ score }: Props) => (
  <React.Fragment>${score} points</React.Fragment>
);

export default Points;
