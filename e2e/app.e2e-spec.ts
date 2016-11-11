import { TestFBPage } from './app.po';

describe('test-fb App', function() {
  let page: TestFBPage;

  beforeEach(() => {
    page = new TestFBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
