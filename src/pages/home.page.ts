import { Locator } from 'playwright';

import { BasePage } from './base.page';
import { Screen } from '../test/support/world';

export class HomePage extends BasePage {

  get windowsOption(): Locator {
    return this.page.locator('#shellmenu_2');
  }
  async clickWindowsOption() {
    return await this.windowsOption.click();
  }

  constructor(screen: Screen) {
    super(screen);
  }
}