import { MainStore } from './../mainStore';
import { RouterStore } from '../routerStore';

describe('Testing MainStore', () => {
  let mainStore: MainStore;

  beforeEach(() => {
    mainStore = new MainStore(new RouterStore());
  });

  it('validate default heading text', () => {
    expect(mainStore.headerText).toEqual('React');
  });

  it('calling update method updated the header text', () => {
    mainStore.updateHeaderTxt('NewHeader');
    expect(mainStore.headerText).toEqual('NewHeader');
  });
});
