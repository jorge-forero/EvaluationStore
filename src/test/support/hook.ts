import { Before, After, ITestCaseHookParameter } from '@cucumber/cucumber';
import { ScenarioWorld } from './world';

const automated = process.env.MINDTOUCH_QA_AUTOMATED;
let tokenID: number;
let tokenSecret: string;

Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
  const contextOptions = {
    baseURL: 'https://www.microsoft.com/es-mx/'
  };

  const screen = await this.init(contextOptions);
  return screen;
});

After(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
  const {
    screen: { page, context, browser }
  } = this;
  const scenarioStatus = scenario.result?.status;

  if (scenarioStatus === 'FAILED') {
    const screenshot = await page.screenshot({
      path: `./reports/screenshots/${scenario.pickle.id}.png`
    });
    await this.attach(screenshot, 'image/png');
  }

  await page.close();
  await context.close();
  await browser.close();
  return this.screen;
});
