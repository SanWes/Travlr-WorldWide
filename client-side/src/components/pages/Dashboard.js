import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';

const Dashboard = () => {

    const [loggedinUser, setLoggedinUser] = useState([])

    const history = useHistory();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/travlr/users/loggedin", {withCredentials: true})
            .then(res=>{
                setLoggedinUser(res.data.user)
            })
            .catch(err=>{
                console.log(err)
                history.push("/")
            })
    }, [loggedinUser, history])

    const logouthandler = (e)=>{
        axios.get("http://localhost:8000/api/travlr/users/logout", {withCredentials: true})
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=> {
                console.log(err)
            })
    }

    return (
        
        <div className="dashboard">        
        {loggedinUser? 
        <div >
            <h1>Welcome {loggedinUser.username}! </h1>
            <button style={{float: 'right'}} onClick={logouthandler}>  Logout  </button>

            <Cards></Cards>

        </div>


            // else 
            : 
            
            <h1>Please Login or Register to view Dashboard</h1> }
        </div>
        
    )
}

export default Dashboard
