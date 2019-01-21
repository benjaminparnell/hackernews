import { useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [state, setState] = useState(false);
  return [state, () => setState(!state)];
};

export default useToggle;
