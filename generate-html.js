
function buildHtml(riskyLicenseData) {
  riskyLicenseData = riskyLicenseData.filter((y) => y != undefined);
  const header = '';
  let body = '';
  
  body +='<h1 style="color:blue;text-align:center;background-color:AliceBlue">'+'List of files having licenses which are potentially risky to use in Proprietary software'+'</h3>';

  if (Object.keys(riskyLicenseData).length === 0) {
    body += '<h2 style="color:red;background-color:AliceBlue">'+'NO RISK IN THE GIVEN FILES' + '</h2>';
  } else {
    body+=riskDetected(riskyLicenseData);
  }
  const html = '<!DOCTYPE html>' +
    '<html><head>' + header + '</head><body>' + body + '</body></html>';

  return html;
}

function riskDetected(x) {
  let output1 ='';
  x.forEach( (a) => {
    output1+= '<div>\n';
    output1+= folderName(a);
    output1+= licenseName(a);
    output1+='</div>\n';
  } );
  return output1;
}

function folderName(x) {
  let output = '';
  output+='<h2 style="color:red;background-color:AliceBlue">'+'Folder Name :'+ x.project + '</h2>';
  output+= '<h4 style= "font-style: italic;"> Risky licenses matched in this folder are: </h4>\n';
  return output;
}

function licenseName(x) {
  let output2 ='';
  output2 +='<ul>';
  const names = x.matches.map((z)=> z.license);

  names.forEach( (y) => {
    output2+= '<li>' + JSON.stringify(y) + '</li>\n';
  });
  output2+='</ul>';
  return output2;
}

module.exports.buildHtml = buildHtml;
