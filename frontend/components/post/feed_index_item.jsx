import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

const FeedIndexItem = ({ user, post, deletePost }) => {
  return (
    <li className='feed-index-item'>
      {user.image_url}
      <h1 className='fii-title'>{post.title}</h1>
      <img
        src={post.image_url}
        />
      <h1 className='fii-description'>{post.description}</h1>
      {post.content}
      <button
        className="fii-button"
        onClick={() => deletePost(post.post_id)}
        >Delete Post
      </button>
    </li>
  );
};

export default FeedIndexItem;
