import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateTo2() {
    return browser.get('/singup');
  }
  getParagraphText() {
    return element(by.deepCss('ion-padding-top ion-text-center')).getText();
  }
  getPageText(){
    return element(by.css('html')).getText();
  }
}
