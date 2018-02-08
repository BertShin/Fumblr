import React from 'react';
import UserFeedItem from './user_feed_item';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { deletePost } = this.props;
    const posts = this.props.posts;
    if (this.props.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <section className="backdrop" onClick={this.props.closeModal}></section>
          <section className="user-modal animated flipInY">
            <section className="user-backdrop">
              <p>{this.props.username}</p>
              <img
                src={this.props.image_url}
                />
            </section>
            <ul className="user-feed">
              {
                posts.map(post => <UserFeedItem
                  currentUser={this.props.currentUser}
                  post={post}
                  key={post.post_id}
                  deletePost={deletePost}/>)
                }
              </ul>
          </section>
        </div>
      );
    }
  }
}


export default UserPage;
