import { AngularReactComponentsPage } from './app.po';

describe('angular-react-components App', () => {
  let page: AngularReactComponentsPage;

  beforeEach(() => {
    page = new AngularReactComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
