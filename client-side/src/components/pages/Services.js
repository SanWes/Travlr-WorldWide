import '../../App.css';
import Cards from '../Cards';
import CostApiData from './CostApi';
import '../../App.css';


function Services() {

    return (
        <>
            <h1 style={{ color: "black" }} className="services">
                Find Your Perfect Haven!
            </h1>
            {/* 
            
            Display components that are pulled from the cost of living application
            Step 1: create new components 
            Step 2: Api request with different end points. Cities API response?: 6 Keys {"key", value}
                                city_id:10697
                                city_name:"Paray-le-Monial"
                                country_name:"France"
                                lat:46.452222
                                lng:4.120665
                                state_code:null
            
            Prices API response?: 

            
            
             */}
            <CostApiData />
            <Cards />
            <Cards />
            
            <Cards />
        </>
    );
}

export default Services;
