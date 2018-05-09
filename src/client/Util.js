/*eslint-disable*/

let fetchAPI = (url,callback) => {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }
      response.json().then((data) =>{
        console.log("fetching data");
        callback(data); //make sure to return something
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
  });
}

export let queryTVMazeAPI = (query,callback) =>{
  const url = 'http://api.tvmaze.com/search/shows?q=' + query;
  fetchAPI(url,callback);
}

export let fullTVMazeAPI = (page,callback) =>{
  const url = 'http://api.tvmaze.com/shows?page=' + page;
  fetchAPI(url,callback)
}