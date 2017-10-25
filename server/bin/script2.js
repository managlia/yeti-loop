var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.aos;

function schemaCB(err, schema) {
  if(schema) {
    console.log("Auto discovery success: " + schema.name);
    var outputName = outputPath + '/' +schema.name + '.json';
    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputName);
      }
    });
  }
  if(err) {
    console.error(err);
    return;
  }
  return;
};

//dataSource.discoverSchema('action_classification_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('campaign_classification_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('company_classification_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('company_url_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('contact_address_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('contact_classification_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('company_address_type',{schema:'aos'},schemaCB);
//dataSource.discoverSchema('contact_title_type',{schema:'aos'},schemaCB);
dataSource.discoverSchema('contact_url_type',{schema:'aos'},schemaCB);
dataSource.discoverSchema('order_state_type',{schema:'aos'},schemaCB);
dataSource.discoverSchema('scope_type',{schema:'aos'},schemaCB);
dataSource.discoverSchema('tag',{schema:'aos'},schemaCB);
dataSource.discoverSchema('company',{schema:'aos'},schemaCB);
dataSource.discoverSchema('contact',{schema:'aos'},schemaCB);
dataSource.discoverSchema('campaign',{schema:'aos'},schemaCB);
dataSource.discoverSchema('action',{schema:'aos'},schemaCB);
