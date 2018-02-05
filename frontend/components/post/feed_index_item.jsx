import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

const FeedIndexItem = ({ currentUser, user, post, deletePost }) => {
  if (post.content_type === "Text") {
    return (
      <li className='feed-index-item'>

        <section>
          <img id="fii-profile" src={user} />
        </section>

        <section className="content">
          <h1 className='fii-title'>{post.title}</h1>
          { post.image_url &&
            <img
              className="fii-text-img"
              src={post.image_url}
              />
          }
          { post.description !== "" &&
            <h1 className='fii-description'>{post.description}</h1>
          }
          { post.content !== "" &&
            <p className="fii-text-content">{post.content}</p>
          }
          <section className="fii-buttons">
            { currentUser === post.user_id &&
              <button
                onClick={() => deletePost(post.post_id)}
                >Delete Post
              </button>
            }
          </section>
        </section>

      </li>
    );

  } else if (post.content_type === "Quote") {
    return (
      <li className='feed-index-item'>

        <section>
          <img id="fii-profile" src={user} />
        </section>

        <section className="content">
          <h1 className='fii-title'>"{post.title}..."</h1>
          <h1 className="fii-quote-content">"...{post.content}"</h1>
          { post.description !== "" &&
            <h1 className='fii-quote-author'>--{post.description}</h1>
          }
          <section className="fii-buttons">
            { currentUser === post.user_id &&
              <button
                onClick={() => deletePost(post.post_id)}
                >Delete Post
              </button>
            }
          </section>
        </section>


      </li>
    );
  }
};

export default FeedIndexItem;
