import { Diff } from 'typelevel-ts';
import * as React from 'react';

// see https://github.com/mobxjs/mobx-react/issues/256#issuecomment-335301953 for more explanation on what this does
export type TypedInject<Stores> = <StoreKeyToInject extends keyof Stores>(
  ...storeKeysToInject: StoreKeyToInject[]
) => <ExpectedProps extends Pick<Stores, StoreKeyToInject>>(
  component: React.ComponentType<ExpectedProps>
) => React.ComponentType<Diff<ExpectedProps, StoreKeyToInject>>;
