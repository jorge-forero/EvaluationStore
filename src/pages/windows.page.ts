import { Locator } from 'playwright';

import { BasePage } from './base.page';
import { Screen } from '../test/support/world';

export class WindowsPage extends BasePage {
  protected url: string = '/windows';
  get searchButton(): Locator {
    return this.page.locator('#search');
  }

  get searchTextBox(): Locator {
    return this.page.locator('#cli_shellHeaderSearchInput');
  }

  get comprarAhoraOption(): Locator {
    return this.page.locator(`//span[contains(text(), 'Comprar ahora')]`);
  }

  get closePupup(): Locator {
    return this.page.locator('#R1MarketRedirect .glyph-cancel');
  }

  get juegosDigitalesLink(): Locator {
    return this.page.locator('#onestore-quicklinksmodule-po1wqqs-quicklink2');
  }

  constructor(screen: Screen) {
    super(screen);
  }

  private async getTextElements(locator: Locator): Promise<string[]> {
    return await locator.locator('li a').allInnerTexts();
  }

  async search(searchParameter: string) {
    await this.searchButton.click();
    await this.searchTextBox.type(searchParameter);
    await this.comprarAhoraOption.click();
    await this.page.waitForTimeout(5000);
  }

}
