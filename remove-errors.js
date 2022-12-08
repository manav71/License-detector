
function removeErrors( x ) {
  let errorLessData = x.filter((y) => y != undefined);

  errorLessData = errorLessData.filter((y)=> y.error == undefined);

  return errorLessData;
}

module.exports.removeErrors = removeErrors;
