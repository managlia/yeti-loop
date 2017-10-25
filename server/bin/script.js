var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.aos;





// Start with INVENTORY table and follow the primary/foreign relationships to discover associated tables
dataSource.discoverAndBuildModels('company_url', {visited: {}, relations: true}, function (err, models) {

        console.log(models);
        models.CompanyUrl.findOne({}, function (err, inv) {
            if(err) {
                console.error(err);
                return;
            }
            console.log("\CompanyUrl: ", inv);
    
            // Follow the product relation to get information about the product
            //inv.product(function (err, prod) {
            //    console.log("\nProduct: ", prod);
            //    console.log("\n ------------- ");
            //});
            dataSource.disconnect();
        });
    });