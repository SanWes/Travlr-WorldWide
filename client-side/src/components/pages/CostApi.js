import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../App.css';

const CostApiData = () => {
    const [cities, setCities] = useState([]);
    const [prices, setPrices] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const [searchCity, setSearchCity] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Need to make call to backend and get data from the API
                const allCities = 
                    await axios.get('/api/travlr/cities');
                    console.log(allCities,"HELLO THERE");
                // const allPrices = await axios.get('http://localhost:3000/api/travlr/prices');
                    if (allCities.data.errors) {
                        console.log("VALIDATION ERRORS");
                }   else {
                        console.log("Successful axios GET check db for information");
                        console.log("Cities data:", allCities.data.results);
                setCities(allCities.data.results);
                    // setPrices(allPrices.data.results);
                }

        }   catch (err) {
                console.log("ERROR Get AXIOS  DATA FROM API ", err.message, err.response?.status, err.response?.headers);
                console.log(cities,"ERROR CITY DATA 1");
                setCities([]);
                console.log(cities,"ERROR CITY DATA 2");
            }
        };

            fetchData();
        }, [cities]);




    const sortByCountry = () => {
        const sortedCities = [...cities].sort((a, b) => a.country.localeCompare(b.country));
        setCities(sortedCities);
    };

    const sortByCity = () => {
        const sortedCities = [...cities].sort((a, b) => a.city.localeCompare(b.city));
        setCities(sortedCities);
    };

    const searchByCountry = () => {
        // Filter cities and prices based on the entered country
        const filteredCities = cities.filter(city => city.country.toLowerCase() === searchCountry.toLowerCase());
        // If you also want to filter prices based on the country, implement similar logic here
        setCities(filteredCities);
    };
    const searchByCity = () => {
        // Filter cities and prices based on the entered city
        const filteredCities = cities.filter(city => city.city.toLowerCase() === searchCity.toLowerCase());
        // If you also want to filter prices based on the city, implement similar logic here
        setCities(filteredCities);
    };

    const handleSearchByCountry = () => {
        // Filter cities and prices based on the entered country
        const filteredCities = cities.filter(city => city.country.toLowerCase() === searchCountry.toLowerCase());
        // If you also want to filter prices based on the country, implement similar logic here

        setCities(filteredCities);
    };
    const handleSearchByCity = () => {
        // Filter cities and prices based on the entered city
        const filteredCities = cities.filter(city => city.city.toLowerCase() === searchCity.toLowerCase());
        // If you also want to filter prices based on the city, implement similar logic here
        setCities(filteredCities);
    };



return (
    <div>
        <div>

        <input
                    type="text"
                    placeholder="Enter Country Name"
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                />

                <br/>
                <button onClick={handleSearchByCountry}>Search by Country</button>


                
                <br/>
                <br/>
                <br/>
                <br/>

                <button onClick={sortByCountry}>Sort by Country</button>



                {/* Display the cities here */}
                <h2>All Cities</h2>
                <ul>
                    {cities.map((city) => (
                        <li key={city.city_id}>
                            <h3>
                            {city.city_name} - {city.country_name}
                            </h3>

                        </li>
                    ))}
                </ul>
                <button onClick={sortByCity}>Sort by City</button>
                {/* Display the prices here */}
                {/* <h2>Prices</h2> */}
                {/* <ul>
                    {prices.map(price => (
                        <li key={price.good_id}>
                            {price.item_name} ${price.usd.avg} {price.category_name}
                        </li>
                    ))}
                </ul> */}
        </div>
    </div>
);



    
}

export default CostApiData;