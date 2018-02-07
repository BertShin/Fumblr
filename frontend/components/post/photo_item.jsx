import React from 'react';


const PhotoItem = ({ currentUser, user, post, deletePost }) => {
  return (
    <li className='feed-index-item'>

      { user &&
        <section>
          <img id="fii-profile" src={user} />
        </section>
      }


      <section className="content">
        <img
          className="fii-photo-img"
          src={post.image_url}
          />
        <h1 className='fii-photo-title'>{post.title}</h1>
        <h1 className='fii-photo-description'>{post.description}</h1>

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
};

export default PhotoItem;
