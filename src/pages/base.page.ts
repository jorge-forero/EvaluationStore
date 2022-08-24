import { BrowserContext, Page, Browser } from 'playwright';
import { Screen } from '../test/support/world';

export abstract class BasePage {
  protected browser: Browser;
  protected context: BrowserContext;
  protected page: Page;
  protected url: string = '/';

  constructor({ browser, context, page }: Screen) {
    this.browser = browser;
    this.context = context;
    this.page = page;
  }

  public async open() {
    await this.page.goto(this.url);
  }
}
