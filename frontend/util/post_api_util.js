export const fetchPosts = () => {
  return $.ajax({
    url: "api/posts",
    method: "GET"
  });
};

export const fetchPost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'GET',
    data: JSON
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'DELETE',
    data: JSON
  });
};

export const createPost = (post) => {
  return $.ajax({
    url: 'api/posts',
    method: 'POST',
    data: { post: post }
  });
};
