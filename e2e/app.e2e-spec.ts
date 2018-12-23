import { MatchRecorderUiPage } from './app.po';

describe('match-recorder-ui App', () => {
  let page: MatchRecorderUiPage;

  beforeEach(() => {
    page = new MatchRecorderUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
