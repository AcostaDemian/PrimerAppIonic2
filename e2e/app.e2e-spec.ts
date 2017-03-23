import { AcostaPage } from './app.po';

describe('acosta App', function() {
  let page: AcostaPage;

  beforeEach(() => {
    page = new AcostaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
