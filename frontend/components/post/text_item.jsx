import React from 'react';

const TextItem = ({post, user, currentUser, deletePost}) => {
  return (
    <li className='feed-index-item'>

      { user &&
        <section>
          <img id="fii-profile" src={user} />
        </section>
      }

      <section className="content">
        <h1 className='fii-title'>{post.title}</h1>
        {post.image_url &&
          <img className="fii-text-img" src={post.image_url} />
        }
        {post.content !== "" &&
          <p className="fii-text-content">{post.content}</p>
        }
        {post.description !== "" &&
          <h1 className='fii-description'>{post.description}</h1>
        }
        <section className="fii-buttons">
          {currentUser === post.user_id &&
            <button onClick={() => deletePost(post.post_id)}>
              Delete Post
            </button>
          }
        </section>
      </section>

    </li>
  );
};

export default TextItem;
