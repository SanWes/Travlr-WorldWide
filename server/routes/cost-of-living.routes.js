// Make Calls to the Cost Of Living API 
// First retrieve all Cities 

// Then retrieve all products + prices 


const CostofLivingApiController = require("../controllers/cost-of-living.controller");

module.exports = app =>{
    // Retrieve all cities
    app.get("api/travlr/cities", CostofLivingApiController.getAllCities);

    // Retrieve all products + prices
    // app.get("/api/travlr/prices", CostofLivingApiController.getAllPrices);

}

