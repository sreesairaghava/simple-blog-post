import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {allPosts,recommendedPosts} from './Posts'
class PostDetails extends Component {
    state={
        postDetails:{
            id:'',
            title:'',
            body:''
        }
    };
 //Create componentDidUpdate to check the change in postId and render the component
 componentDidUpdate(prevProps){
    const {
        match:{
            params: {postId}
        }
    } = this.props;

    const prevPostId = prevProps.match.params.postId;
    if(prevPostId !== postId){
        this.fetchPostData(postId);
    }
    
}

    //create component did mount to fetch data onload 
    componentDidMount(){
        const {match:{params:{postId}}} = this.props;
        this.fetchPostData(postId);
    };
   

    //@param fecthPostData function
    //@use to fetch post details from the local post.js
    fetchPostData =(postId)=>{
        const post = allPosts.find(post=> post.id == postId);
        this.setState({
            postDetails: post
        });

    };

    render() {
        return (
            <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.postDetails.title}</h1>
        </header>
        <p className="lead">{this.state.postDetails.body}</p>
        <section>
          <h4>Recommended Posts</h4>
          {recommendedPosts.map(post => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </div>
        );
    }
}

export default PostDetails;