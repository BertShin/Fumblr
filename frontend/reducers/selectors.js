
export const getPosts = (posts, userId) => {
  const iPosts = Object.values(posts);
  const desiredPosts = [];
  for (let i = 0; i < iPosts.length; i++) {
    if (iPosts[i].user_id === userId) {
      desiredPosts.push(iPosts[i]);
    }
  }
  return desiredPosts;
};
