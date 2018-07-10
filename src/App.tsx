import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import upperFirst from 'lodash-es/upperFirst';
import includes from 'lodash-es/includes';
import { Grid, Button } from 'semantic-ui-react';

import { typedInject } from './stores/rootStore';
import { MainStore } from './stores/mainStore';
import { observable } from '../node_modules/mobx';
import { RouterStore, gitPageRoute } from './stores/routerStore';
import GitHubPage from './routes/GitHubPage';

const randomWords = require('random-words');

const StyledApp = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  .button {
    border: 1px solid green;
    background-color: lightgreen;
    color: white;
    max-width: 12rem;
    cursor: pointer;
    padding: 1rem 3rem;
    margin: auto;
  }
  .link {
    cursor: pointer;
    padding-top: 3rem;
  }
`;

interface Props {
  mainStore: MainStore;
  routerStore: RouterStore;
}

@observer
export class App extends React.Component<Props, {}> {
  @observable newHeaderTxt: string;

  render() {
    const { headerText } = this.props.mainStore;

    return (
      <Grid style={{ marginTop: '6rem', marginBottom: '6rem' }} container>
        <StyledApp>
          <header>
            <h1>Random text - {upperFirst(headerText)}</h1>
          </header>
          <Button className="button" onClick={() => this.props.mainStore.updateHeaderTxt(randomWords())}>
            Change Txt
          </Button>
          <a className="link" onClick={() => this.props.mainStore.goToTrendingGithubPage()}>
            Go To Another Page
          </a>
          {includes(this.props.routerStore.activeRoutes, gitPageRoute) && <GitHubPage />}
        </StyledApp>
      </Grid>
    );
  }
}

export default typedInject('mainStore', 'routerStore')(App);
