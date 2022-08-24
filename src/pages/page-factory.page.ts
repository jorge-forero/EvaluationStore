import { Screen } from '../test/support/world';
import { BasePage } from './base.page';
import { HomePage } from './home.page';
import { WindowsPage } from './windows.page';
//import { HomePage } from './home.page';
//import { LoginPage } from './login.page';

export const getPage = async (pageName: string, screen: Screen): Promise<BasePage> => {
  switch (pageName) {
    case 'windows':
      return new WindowsPage(screen);
    case 'home':
      return new HomePage(screen);
    // case 'dashboard':
    //   return new DashboardPage(screen);
    default:
      throw new Error(`Page ${pageName} not found`);
  }
};
