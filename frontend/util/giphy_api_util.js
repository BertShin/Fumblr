

export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=12`,
    method: 'GET'
  });
};
