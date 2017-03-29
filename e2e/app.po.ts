import { browser, element, by } from 'protractor';

export class Angular2MapPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dm-root h1')).getText();
  }
}
