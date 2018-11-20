import * as firebase from 'firebase/app';
import 'firebase/database';

class Api {
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
      Promise.all(ids.slice(0, 25).map(id => this.fetch(`item/${id}`)))
    );
  }
}

export default new Api();
