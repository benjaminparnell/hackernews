import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import TypeSelectorContainer, { TYPES } from '../TypeSelectorContainer';

describe('<TypeSelectorContainer />', () => {
  afterEach(cleanup);

  it('should match the snapshot', () => {
    expect(
      render(<TypeSelectorContainer activeTab="new" setActiveTab={() => {}} />)
        .container.firstChild
    ).toMatchSnapshot();
  });

  it('should render buttons for all tabs in TYPES', () => {
    const { getByText } = render(
      <TypeSelectorContainer activeTab="new" setActiveTab={() => {}} />
    );
    TYPES.forEach(({ label }) => getByText(label));
  });

  it('should call the setActiveTab(type) when the button for a type is clicked', () => {
    const setActiveTabSpy = jest.fn();
    const { getByText } = render(
      <TypeSelectorContainer activeTab="new" setActiveTab={setActiveTabSpy} />
    );
    fireEvent.click(getByText('Top'));
    expect(setActiveTabSpy).toHaveBeenCalledTimes(1);
    expect(setActiveTabSpy).toHaveBeenCalledWith('top');
  });
});
