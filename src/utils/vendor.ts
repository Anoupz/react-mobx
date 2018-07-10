import { Omit } from 'typelevel-ts';
import * as React from 'react';

declare module 'mobx-react' {
  export function inject<D extends Object>(
    mapStoreToProps: (store: any) => D
  ): <A extends D>(component: React.ComponentType<A>) => React.SFC<Omit<A, keyof D> & Partial<D>>;
}
