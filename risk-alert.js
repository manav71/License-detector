
const riskyLicenseList = require('./list-of-risky-licenses');

function identifyRisk(x) {
  x =x.filter((y) => y.matches = y.matches.filter((y) =>riskyLicenseList[y.license] != undefined ));
  x = removeUnwanted(x);
  return x;
}

function removeUnwanted(x) {
  if ( x.length > 0) {
    x = x.filter((y) => y.matches.length>0);
  }
  return x;
}

module.exports.identifyRisk = identifyRisk;
