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
          <body className="user-modal">
            <section className="user-backdrop">
              <p>{this.props.username}</p>
              <img
                src={this.props.image_url}
                />
            </section>
            <section className="user-feed">
              <ul>
                {
                  posts.map(post => <UserFeedItem
                    currentUser={this.props.currentUser}
                    post={post}
                    key={post.post_id}
                    deletePost={deletePost}/>)
                  }
                </ul>
            </section>
          </body>
        </div>
      );
    }
  }
}


export default UserPage;
