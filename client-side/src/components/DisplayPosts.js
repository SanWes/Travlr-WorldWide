import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/travlr/AllPosts');
                if (response.data.errors) {
                    console.log("VALIDATION ERRORS");
                    console.log("LOOK HERE BUGGGG", response.data.posts);
                } else {
                    console.log("Successful axios GET check db for user");
                    setPosts(response.data.results); // Assuming 'results' contains the posts array
                }
            } catch (err) {
                console.log("AXIOS Get Posts ERROR", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="post-container">
            <h1 style={{ fontWeight: 'bold', fontSize: '2rem', color: '#1ba0e7', textAlign: 'center' }}>Journey Chronicles</h1>
            <ul >
                {posts.map((post) => (
                    <li style={{ backgroundColor: '#79BC7D6' }} className="post" key={post._id}>
                        <h2>{post.title}</h2>
                        <h3>by "{post.author}"</h3>
                        <p>{post.content}</p>
                        
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default DisplayPosts;
