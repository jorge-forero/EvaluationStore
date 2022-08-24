const common = `
  src/test/features/**/*.feature
  --require-module ts-node/register
  --require src/test/step-definitions/**/*.ts
  --require src/**/*.ts
  --format json:reports/report.json 
  --format html:reports/report.html
  --format summary 
  --format progress-bar 
  --format @cucumber/pretty-formatter
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  --publish-quiet
  `;

module.exports = {
  default: common,
};