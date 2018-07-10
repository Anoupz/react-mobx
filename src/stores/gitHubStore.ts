import asyncComputed from '../utils/asyncComputed';

export class GitHubStore {
  trendingJavascriptRepos = asyncComputed(async () => {
    const response = await fetch(`https://github-trending-api.now.sh/repositories?language=javascript&since=weekly`);
    const result = await response.json();
    return result;
  });
}

export default new GitHubStore();
