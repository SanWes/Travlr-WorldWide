import React from 'react'
import '../../App.css'
import PostForm from './PostForm'
import DisplayPosts from '../DisplayPosts'

function Products() {
    return (
        <>
        <div >

            <h1 className="products" >Journey Chronicles!</h1>
            <PostForm/>
            <DisplayPosts/>
        </div>
        </>
    )
}

export default Products
