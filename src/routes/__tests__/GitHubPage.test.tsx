import * as React from 'react';
import { shallow } from 'enzyme';

import { GitHubStore } from '../../stores/gitHubStore';
import GitHubPage from '../GitHubPage';

describe('Git Hub Page testing', () => {
  let gitHubStore: GitHubStore = new GitHubStore();

  it('renders without crashing', () => {
    shallow(<GitHubPage gitHubStore={gitHubStore} />);
  });

  it('renders correctly', () => {
    expect(shallow(<GitHubPage gitHubStore={gitHubStore} />)).toMatchSnapshot();
  });
});
