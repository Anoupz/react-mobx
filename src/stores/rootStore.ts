import { inject } from 'mobx-react';

import { TypedInject } from './../utils/typedInject';
import { MainStore } from './mainStore';
import routerStore from './routerStore';
import gitHubStore from './gitHubStore';

export const mainStore = new MainStore(routerStore);
export const rootStores = {
  routerStore,
  mainStore,
  gitHubStore
};

export type Stores = typeof rootStores;

export const typedInject = inject as TypedInject<Stores>;
