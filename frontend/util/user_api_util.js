export const fetchUser = id => {
  return $.ajax({
    url: `api/users/${id}`,
    method: "GET",
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    data: JSON
  });
};

export const patchUser = (formData) => {
  return $.ajax({
    url: `api/users/${formData.id}`,
    method: 'PATCH',
    data: {user: formData}
  });
};
