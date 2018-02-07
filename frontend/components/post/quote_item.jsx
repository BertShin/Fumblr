import React from 'react';


const QuoteItem = ({ currentUser, user, post, deletePost }) => {
  return (
    <li className='feed-index-item'>

      { user &&
        <section>
          <img id="fii-profile" src={user} />
        </section>
      }


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
};

export default QuoteItem;
