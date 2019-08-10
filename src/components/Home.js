import React from 'react';
import {Link} from 'react-router-dom';
import {posts} from './Posts'
import './Home.css';
const Home = () => {
    return (
        <div className="App">
           <header className="App-header">
               <h1 className="App-title">
                   Blog Post
               </h1>
           </header>
           <div>
               {
                   posts.map(post=>{
                       return (
                           <div key={post.id}> 
                                <Link to={`/posts/${post.id}`}> <h4>{post.title}</h4></Link>
                               
                           </div>
                       )
                   })
               }
           </div>
        </div>

        
    );
};

export default Home;