
const fs = require('fs');

const {removeErrors} = require('./remove-errors');

const {checkConfidence} = require('./check-confidence');

const {identifyRisk} = require('./risk-alert');

const {buildHtml} = require('./generate-html');

const licenseData = require('./licenseDataOutput');

const errorLessLicenseData = removeErrors(licenseData);

const highConfidenceLicenseData = checkConfidence(errorLessLicenseData);

const riskyLicenseData = identifyRisk(highConfidenceLicenseData);

const licenseDataHTML = buildHtml(riskyLicenseData);

if (riskyLicenseData.length != 0) {
  fs.writeFileSync('RiskyLicenseList.html', licenseDataHTML);
  console.log('risky present!!');
  process.exit(1);
}else {
  console.log('No risk present');
}
