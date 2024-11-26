import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../../App.css'

const PostForm = () => {

    const [postInfo, setPostInfo] = useState({
        title:"",
        author:"",
        content:"",
        tags:"",
        uploadedByUser:"",
        createdAt:"",
    })

    const history = useHistory();


    const [errormsg, setErrorMsg] = useState(null)

    const changehandler = (e) => {
        setPostInfo({
            ...postInfo,
            [e.target.name]: e.target.value
        })
    }

    const postFormHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/travlr/CreatePost", postInfo)
        .then(res=>{
            // write code that will execute when form is sent
            // save the post into database
            if(res.data.msg === "success!") {
                console.log("SUCCESSFUL POST!");
                //the password entered matches the stored hashed pw
                history.push("/")
                
            } else {
                //set error messages here 
                setErrorMsg(res.data.msg)
                
            }
        })
        .catch(err=> console.log("POSTS ERROR",err))
    }

    return (
        <div className="postForm">
            <h1>Journey Chronicles: Share Your Dream Destination Story with Us!</h1>

            <h3>
                
            <form onSubmit={postFormHandler} >
                {errormsg? <p className="text-danger"> {errormsg} </p>: "" }
                

                <div className="form-group">
                    <label >Title</label>
                    <input type="text" name="title" className="form-control" onChange={changehandler} />
                     {/* {errors.title? <p className="text-danger"> {errors.title.message} </p>: ""} */}
                </div>
                <div className="form-group">
                    <label >Author</label>
                    <input type="text" name="author" className="form-control" onChange={changehandler} />
                    {/* {errors.author? <p className="text-danger"> {errors.author.message} </p>: ""} */}
                </div>
                <div className="form-group">
                    <label >Content</label>
                    <input type="text" name="content" className="form-control" onChange={changehandler} />
                    {/* {errors.cotent? <p className="text-danger"> {errors.cotent.message} </p>: ""} */}
                </div>
                <div className="form-group">
                    <label >Tags</label>
                    <input type="text" name="tags" className="form-control" onChange={changehandler} />
                    {/* {errors.tags? <p className="text-danger"> {errors.tags.message} </p>: ""} */}
                </div>

                <input type="submit" value="Submit" className="btn btn-primary" />
            </form> </h3>
        </div>
    )
}

export default PostForm;
