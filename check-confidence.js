
// remove all the detected licenses under 70% confidence
// If all the license detected in the file are below 70% confidence then remove the file itself

function checkConfidence(data) {
  data = data.filter((y)=>y.matches = y.matches.filter((y) => y.confidence > 0.7));
  data=data.filter((y) => y.matches.length != 0);
  return data;
}

module.exports.checkConfidence = checkConfidence;
