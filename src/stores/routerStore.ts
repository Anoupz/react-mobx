import { computed, reaction } from 'mobx';
import createBrowserHistory from 'mobx-history/createBrowserHistory';

const UrlPattern = require('url-pattern');
const _mainRoute = '/main';
export const mainPageRoute = new UrlPattern(_mainRoute + '(/*)');

const _gitRoute = '/trendingGitRepo';
export const gitPageRoute = new UrlPattern(_gitRoute + '(/*)');

const routes = [mainPageRoute, gitPageRoute];

export type PAGE = 'main' | 'trendingGitRepo';
export class RouterStore {
  history = createBrowserHistory();

  redirectReaction = reaction(
    () => this.activeRoutes.length,
    () => {
      if (this.activeRoutes.length === 0) {
        const searchParam = new URL(window.location.href).search;
        this.history.push({
          pathname: mainPageRoute.stringify({ page: '/' }),
          search: searchParam
        });
      }
    },
    { fireImmediately: true }
  );

  @computed
  get activeRoutes() {
    return routes.filter(route => !!route.match(this.history.location.pathname));
  }
}
export default new RouterStore();
