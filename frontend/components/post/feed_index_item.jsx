import React from 'react';
import TextItem from './text_item';
import QuoteItem from './quote_item';
import PhotoItem from './photo_item';
import GifItem from './gif_item';
import { Link, NavLink, Redirect } from 'react-router-dom';

const FeedIndexItem = ({ currentUser, user, post, deletePost }) => {
  if (post.content_type === "Text") {
    return (
      <TextItem
        currentUser={currentUser}
        user={user}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "Quote") {
    return (
      <QuoteItem
        currentUser={currentUser}
        user={user}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "Photo") {
    return (
      <PhotoItem
        currentUser={currentUser}
        user={user}
        post={post}
        deletePost={deletePost}
        />
    );
  } else if (post.content_type === "GIF") {
    return (
      <GifItem
        currentUser={currentUser}
        user={user}
        post={post}
        deletePost={deletePost}
        />
    );
  }
};

export default FeedIndexItem;
