import * as React from 'react';
import pluralize from 'pluralize';

type Props = {
  score: number;
};

const Points = ({ score }: Props) => (
  <React.Fragment>{pluralize('point', score, true)}</React.Fragment>
);

export default Points;
