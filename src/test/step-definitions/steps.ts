import { Given, When } from '@cucumber/cucumber';
import { HomePage } from '../../pages/home.page';
import { getPage } from '../../pages/page-factory.page';
import { WindowsPage } from '../../pages/windows.page';

let homePage: HomePage;
let windows: WindowsPage;

Given(/^I am on the '([^"]*)' page$/, async function (pageName: string) {
  const { screen } = this;
  // homePage = await getPage(pageName, screen)
  homePage = new HomePage(screen);
  await homePage.open();
});

When('I click on windows button', async function () {
  await homePage.clickWindowsOption();
});

When(/^I search with '(\w+)' and click comprar$/, async function (searchParameter: string) {
  const { screen } = this;
  windows = new WindowsPage(screen);
  await windows.search(searchParameter);
});

When(/^I select juegos digitales$/, async function () {
  await windows.juegosDigitalesLink.click();
});

