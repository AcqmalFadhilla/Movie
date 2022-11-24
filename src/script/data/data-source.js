import movies from './movie.js';

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=a3363b515185bb0655e00311e64e1ceb&language=en-US&query=${keyword}
    `)
      .then(response => {
          return response.json();
        })
      .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
