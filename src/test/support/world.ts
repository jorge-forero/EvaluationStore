import playwright, { BrowserContextOptions, Page, Browser, BrowserContext, BrowserType } from 'playwright';
import { World, IWorldOptions, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

export type Screen = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};

export class ScenarioWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }

  screen!: Screen;

  async init(contextOptions?: BrowserContextOptions): Promise<Screen> {
    await this.screen?.page?.close();
    await this.screen?.context?.close();
    await this.screen?.browser?.close();

    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();

    this.screen = { browser, context, page };

    return this.screen;
  }

  private newBrowser = async (): Promise<Browser> => {
    let browserType: BrowserType;
    switch (process.env.BROWSER) {
      case 'chrome': {
        browserType = playwright['chromium'];
        break;
      }
      case 'firefox': {
        browserType = playwright['firefox'];
        break;
      }
      case 'safari': {
        browserType = playwright['webkit'];
        break;
      }
      default: {
        browserType = playwright['chromium'];
        break;
      }
    }

    const browser = await browserType.launch({
      headless: false,
      args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
    });
    return browser;
  };
}

setWorldConstructor(ScenarioWorld);
