import React from 'react';
import TextItem from '../post/text_item';
import QuoteItem from '../post/quote_item';
import PhotoItem from '../post/photo_item';
import GifItem from '../post/gif_item';
import { Link, NavLink, Redirect } from 'react-router-dom';

const UserFeedItem = ({ currentUser, post, deletePost }) => {
  if (post.content_type === "Text") {
    return (
      <TextItem
        currentUser={currentUser}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "Quote") {
    return (
      <QuoteItem
        currentUser={currentUser}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "Photo") {
    return (
      <PhotoItem
        currentUser={currentUser}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "GIF") {
    return (
      <GifItem
        currentUser={currentUser}
        post={post}
        deletePost={deletePost}
        />
    );
  }
};

export default UserFeedItem;
