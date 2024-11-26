const axios = require('axios');


require('dotenv').config();
// Manipulate the cost-of-living API data by creating functions here 
const COSTAPI = process.env.COST_OF_LIVING_API_KEY
const BASE_URL = 'https://cost-of-living-and-prices.p.rapidapi.com';


class CostApiController {
    constructor() {
        this.method = 'GET';
        this.headers = {
            'X-RapidAPI-Key': `${COSTAPI}`,
            'X-RapidAPI-Host': `${BASE_URL}`};
    }
    
// Want to retrieve all cities from the API  and display them in a table 

    async getAllCities(req,res) {
        const options = {
            
            url: `${BASE_URL}/cities`
        };
        
        try {
            const allCities = 
                await axios.get(options);
                res.status(200).json({ results: allCities });

                console.log(allCities);
            const data = allCities.data;
                console.log("DATA!!!!",data);
                return data;
        } catch (error) {
            res.status(500).json({ ERROR: error.message });
            console.log("ERROR GETTING ALL CITIES DATA CHECK COST CONTROLLER");

        }

        
    }

    async getAllProducts(city="Boca Chica", country="Dominican Republic") {
        try {
            const response = await axios.get('https://cost-of-living-and-prices.p.rapidapi.com/prices', {
                params: {
                    city_name: city,
                    country_name: country,
                },
                headers: this.headers
            });
            const  data  = response.data;
            console.log(data);
            return data;
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }
}

module.exports = new CostApiController();
