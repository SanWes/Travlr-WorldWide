import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../App.css'

const Login = () => {

    const [formInfo, setFormInfo] = useState({
        email:"",
        password:""
    })

    const history = useHistory();


    const [errormsg, setErrorMsg] = useState(null)

    const changehandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const loginhandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/travlr/login", formInfo, {withCredentials: true})
        .then(res=>{
            console.log(res)
            if(res.data.msg === "success!") {
                console.log("SUCCESSFUL LOGIN");
                //the password entered matches the stored hashed pw
                history.push("/dashboard")
                
            } else {
                //set error messages here 
                setErrorMsg(res.data.msg)
                
            }
        })
        .catch(err=> console.log("LOGIN ERROR",err))
    }

    return (
        <div>
            <h1>Returning? Login</h1>
            <form onSubmit={loginhandler} >
                {errormsg? <p className="text-danger"> {errormsg} </p>: "" }
                

                <div className="form-group">
                    <label >Email</label>
                    <input type="text" name="email" className="form-control" onChange={changehandler} />
                    {/* {errors.email? <p className="text-danger"> {errors.email.message} </p>: ""} */}
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" className="form-control" onChange={changehandler} />
                    {/* {errors.password? <p className="text-danger"> {errors.password.message} </p>: ""} */}
                </div>

                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Login;
