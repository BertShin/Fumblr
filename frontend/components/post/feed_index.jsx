import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import FeedIndexItem from './feed_index_item';
import { RingLoader } from 'react-spinners';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render() {
    const { fetchPost, deletePost, currentUser } = this.props;
    const posts = this.props.posts;
    return (
      <div>
        <ul className="main-index animated mainfadeInUp">
          {
            posts.map(post => <FeedIndexItem
              currentUser={currentUser}
              user={post.user_image}
              post={post}
              key={post.post_id}
              deletePost={deletePost}/>)
          }
        </ul>
      </div>
    );
  }
}

export default FeedIndex;
