import { WalkingDeadPage } from './app.po';

describe('walking-dead App', function() {
  let page: WalkingDeadPage;

  beforeEach(() => {
    page = new WalkingDeadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
