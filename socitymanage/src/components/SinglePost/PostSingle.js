import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import User from '../User/User';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PostSingle = () => {
    const param = useParams();
   const [post, setPost] = useState({})
    useEffect(() => { 
        
    })
    return (
      <div className="post-wrapper feed-box">
        <div className="post__top-bar">
          <User username={post.user_name} />
        </div>
        <div className="post__img-container">
          <img src={post?.selectedFile} alt="" className="post-img" />
        </div>
        <p className="post-content">{post.message}</p>
        <span className="date">{moment(post.createdAt).fromNow()}</span>
      </div>
    );
}

export default PostSingle