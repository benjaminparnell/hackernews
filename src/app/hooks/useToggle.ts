import * as React from 'react';

const useToggle = (): [boolean, () => void] => {
  const [state, setState] = React.useState(false);
  return [state, () => setState(!state)];
};

export default useToggle;
