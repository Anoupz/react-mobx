import React, { Component } from 'react';
import { Dimmer, Loader, Message, Grid, Header, Table } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { typedInject } from '../stores/rootStore';
import { GitHubStore } from '../stores/gitHubStore';

interface Props {
  gitHubStore: GitHubStore;
}

@observer
export class GitHubPage extends Component<Props, {}> {
  render() {
    const { trendingJavascriptRepos } = this.props.gitHubStore;
    return (
      <Grid width={8} style={{ marginTop: '6rem', marginBottom: '6rem' }}>
        <Header>Popular Javascript repo</Header>
        {trendingJavascriptRepos.case({
          pending: () => (
            <Dimmer active inverted>
              <Loader size="mini">Loading details...</Loader>
            </Dimmer>
          ),
          rejected: () => (
            <Message negative>
              <Message.Header>We encountered some errors.</Message.Header>
              <p>We had a problem loading this page. Please try again later.</p>
            </Message>
          ),
          fulfilled: data => (
            <Table color="purple">
              <Table.Header>
                <Table.Row textAlign="center">
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Repo Url</Table.HeaderCell>
                  <Table.HeaderCell>Stars</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((repo, index) => (
                  <Table.Row key={index} textAlign="center">
                    <Table.Cell width={6}>{repo.name}</Table.Cell>
                    <Table.Cell width={6}>{repo.url}</Table.Cell>
                    <Table.Cell width={4}>{repo.stars}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )
        })}
      </Grid>
    );
  }
}

export default typedInject('gitHubStore')(GitHubPage);
