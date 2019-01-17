import * as React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import List, { ListCard } from '../List';
import { Post } from '../../types';

const examplePost: Post = {
  id: 123,
  title: 'This is a title',
  text: 'This is a post',
  by: 'ben',
  url: 'https://google.com',
  score: 100,
  descendants: 0,
  kids: [],
  time: new Date().getTime()
};

const posts: Post[] = [examplePost, examplePost, examplePost];

describe('<List />', () => {
  const renderList = (posts: Post[]) => {
    return render(
      <MemoryRouter>
        <List posts={posts} />
      </MemoryRouter>
    );
  };

  it('should render a list of <ListCard />', () => {
    const { getAllByText } = renderList(posts);
    expect(getAllByText('This is a title').length).toBe(3);
  });
});

describe('<ListCard />', () => {
  const renderCard = (post: Post) => {
    return render(
      <MemoryRouter>
        <ListCard {...post} index={1} />
      </MemoryRouter>
    );
  };

  it('should match snapshot', () => {
    expect(renderCard(examplePost)).toMatchSnapshot();
  });

  it('should render "discuss" if its post has no descendants', () => {
    const { getByText } = renderCard(examplePost);
    getByText('discuss');
  });

  it('should render "{n} comments" if its post has n comments', () => {
    const { getByText } = renderCard({ ...examplePost, descendants: 10 });
    getByText('10 comments');
  });

  it('should strip the displayed external url down to its host', () => {
    const { container } = renderCard(examplePost);
    expect(container.innerHTML).toContain('(google.com)');
  });
});
