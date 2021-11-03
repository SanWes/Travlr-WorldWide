import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../../App.css'

const Register =() => {
    
    const [formInfo, setFormInfo] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const[errors, setErrors] = useState({

    })

    const history = useHistory();

    const changehandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submithandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/travlr/register', formInfo, {withCredentials: true})
        .then(res=>{
            console.log(res)
            if(res.data.errors){
                console.log("VALIDATION ERRORS");
                setErrors(res.data.errors)
            } else{
                console.log("Successful axios POST check db for user");
                history.push("/dashboard")

            }
        })
        .catch(err=> console.log("AXIOS POST ERROR",err))
    }

    return (
        <div>
            <h1>New Users Register</h1>
            <form onSubmit={submithandler}>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" name="username" className="form-control" onChange={changehandler} />
                    {errors.username? <p className="text-danger"> {errors.username.message} </p>: ""}
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" name="email" className="form-control" onChange={changehandler} />
                    {errors.email? <p className="text-danger"> {errors.email.message} </p>: ""}
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" className="form-control" onChange={changehandler} />
                    {errors.password? <p className="text-danger"> {errors.password.message} </p>: ""}

                </div>
                <div className="form-group">
                    <label >Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={changehandler} />
                    {errors.confirmPassword? <p className="text-danger"> {errors.confirmPassword.message} </p>: ""}
                </div>

                <input type="submit" value="Sign Up" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Register
