import { observable, action } from 'mobx';
import { RouterStore } from './routerStore';

export class MainStore {
  @observable headerText: string = 'React';

  constructor(private _routerStore: RouterStore) {}

  @action
  updateHeaderTxt(newString: string) {
    this.headerText = newString;
  }

  @action
  goToTrendingGithubPage() {
    this._routerStore.history.push(`/trendingGitRepo`);
  }
}
