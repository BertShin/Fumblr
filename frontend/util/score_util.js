
export const fetchGame = (sport, forDate) => {
  return $.ajax({
    url: `https://api.mysportsfeeds.com/v1.2/pull/${sport}/2016-2017-regular/scoreboard.json?fordate=${forDate}`,
    method: 'GET',
    headers: {
      "Authorization": "Basic " + btoa("Student" + ":" + "AmazingPW")
    },
    dataType: 'json',
  });
};
