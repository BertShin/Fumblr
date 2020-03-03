
export const getPosts = (posts, userId) => {
  const iPosts = Object.values(posts);
  const desiredPosts = iPosts.map(post => {
    if (post.user_id === userId) {
      return post; 
  }
    
  return desiredPosts;
};
