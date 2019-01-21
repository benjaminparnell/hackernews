import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import useToggle from '../useToggle';

const TestToggle = () => {
  const [state, toggleState] = useToggle();

  return (
    <div>
      {state ? <p>True</p> : <p>False</p>}
      <button onClick={() => toggleState()}>Toggle</button>
    </div>
  );
};

describe('useToggle', () => {
  it('should toggle its state when the returned function is called', () => {
    const { getByText } = render(<TestToggle />);
    fireEvent.click(getByText('Toggle'));
    getByText('True');
    fireEvent.click(getByText('Toggle'));
    getByText('False');
  });
});
