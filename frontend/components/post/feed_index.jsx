import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { fetchPost, deletePost } = this.props;
    const posts = this.props.posts;
    return (
      <div className="main-index">
        <p className="post-form"> Post Form Will go Here </p>
        <ul className="feed-items">
          {
            posts.map(post => <FeedIndexItem user={post.user_id} post={post} key={post.post_id} deletePost={deletePost}/>)
          }
        </ul>
      </div>
    );
  }
}

export default FeedIndex;
