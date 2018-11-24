export type StoryType = 'new' | 'top';

export type Item = {
  id: number;
  text: string;
  by: string;
  url: string;
  score: number;
  descendants: number;
  kids: number[];
  time: number;
};

export type Post = Item & {
  title: string;
};

export type Comment = Item;
