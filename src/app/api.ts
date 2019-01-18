import * as firebase from 'firebase/app';
import 'firebase/database';

export interface IApi {
  fetch(path: string): Promise<any>;
  stories(type: string): Promise<any[]>;
  item(id: number): Promise<any>;
  comments(ids: number[]): Promise<any[]>;
}

class Api implements IApi {
  private database: firebase.database.Database;

  constructor() {
    const app = firebase.initializeApp(
      {
        databaseURL: 'https://hacker-news.firebaseio.com'
      },
      'hackernews'
    );
    this.database = firebase.database(app);
  }

  fetch(path: string) {
    return this.database
      .ref(`v0/${path}`)
      .once('value')
      .then(snapshot => snapshot.val());
  }

  stories(type: string) {
    return this.fetch(`${type}stories`).then((ids: number[]) =>
      Promise.all(ids.slice(0, 25).map(id => this.item(id)))
    );
  }

  item(id: number) {
    return this.fetch(`item/${id}`);
  }

  comments(ids: number[]) {
    return Promise.all(ids.map(id => this.item(id)));
  }
}

export default new Api();
