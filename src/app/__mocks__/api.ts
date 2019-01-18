import { IApi } from '../api';

class Api implements IApi {
  item(id: number) {
    return Promise.resolve();
  }

  comments(ids: number[]) {
    return Promise.resolve([]);
  }

  fetch(path: string) {
    return Promise.resolve();
  }

  stories(type: string) {
    return Promise.resolve([]);
  }
}

export default new Api();
