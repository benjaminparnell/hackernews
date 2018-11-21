export type StoryType = 'new' | 'top';

export type Post = {
  id: number;
  title: string;
  by: string;
  url: string;
  score: number;
  descendants: number;
};
