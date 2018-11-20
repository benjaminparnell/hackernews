export type StoryType = 'new' | 'top';

export type Post = {
  title: string;
  by: string;
  url: string;
  score: number;
  descendants: number;
};
