import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('debiese mostrar el login', () => {
    page.navigateTo();
    expect(page.getPageText()).toContain('cualquier lesera');
  });

  it('debiese mostrar el singup con su contenido', () => {
    page.navigateTo2();
    expect(page.getPageText()).toContain('¡Registrate!');
  });
});
