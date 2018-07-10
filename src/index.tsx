import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as mobx from 'mobx';
import { Provider } from 'mobx-react';

import App from './App';
import { rootStores } from './stores/rootStore';
import registerServiceWorker from './registerServiceWorker';

const stores = rootStores;
mobx.configure({ enforceActions: true });
window['mobx'] = mobx;

const renderDevTool = () => {
  if (process.env.NODE_ENV !== 'production') {
    window['stores'] = stores;
    const DevTools = require('mobx-react-devtools').default;
    return <DevTools />;
  }
  return undefined; //dummy
};

ReactDOM.render(
  <Provider {...stores}>
    <div>
      {renderDevTool()}
      <App />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
