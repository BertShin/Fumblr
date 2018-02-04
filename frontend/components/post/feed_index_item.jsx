import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

const FeedIndexItem = ({ currentUser, user, post, deletePost }) => {
  if (post.content_type === "Text") {
    return (
      <li className='feed-index-item'>
        <h1 className='fii-profile'>{user}</h1>
        <h1 className='fii-title'>{post.title}</h1>
        { post.content !== null &&
          <p className="fii-text-content">{post.content}</p>
        }
        { post.image_url !== null &&
          <img
            src={post.image_url}
            />
        }
        { post.description !== null && 
          <h1 className='fii-description'>{post.description}</h1>
        }
        { currentUser === post.user_id &&
          <button
            className="fii-button"
            onClick={() => deletePost(post.post_id)}
            >Delete Post
          </button>
        }
      </li>
    );
  } else if (post.content_type === "Quote") {
    return (
      <li className='fii-quote'>
        <h1 className='fii-profile'>{user}</h1>
        <h1 className='fii-title'>"{post.title}..."</h1>
        <h1 className="fii-quote-content">"{post.content}"</h1>
        { currentUser === post.user_id &&
          <button
            className="fii-button"
            onClick={() => deletePost(post.post_id)}
            >Delete Post
          </button>
        }
      </li>
    );
  }
};

export default FeedIndexItem;
