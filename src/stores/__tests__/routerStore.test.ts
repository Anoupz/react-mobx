import { RouterStore } from './../routerStore';

describe('Testing RouterStore', () => {
  let routerStore: RouterStore;

  beforeEach(() => {
    routerStore = new RouterStore();
  });

  it('has at least one active routes', () => {
    expect(routerStore.activeRoutes.length).toEqual(1);
  });
});
