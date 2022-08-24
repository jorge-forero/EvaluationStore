import { Locator } from 'playwright';

import { BasePage } from './base.page';
import { Screen } from '../test/support/world';

export class StorePage extends BasePage {

  constructor(screen: Screen) {
    super(screen);
  }
}