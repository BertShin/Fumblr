export const fetchGame = (sport, forDate) => {
  return $.ajax({
    // Including a Sport when later sport data have become available
    url: `https://api.mysportsfeeds.com/v1.2/pull/${sport}/2016-2017-regular/scoreboard.json?fordate=${forDate}`,
    method: 'GET',
    headers: {
      // Basic&Free Acc
      "Authorization": "Basic " + btoa("Student" + ":" + "AmazingPW")
    },
    dataType: 'json',
  });
};
