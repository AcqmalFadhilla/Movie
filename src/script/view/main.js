import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked = async () => {
    try {
      const search = await DataSource.searchClub(searchElement.value);
      renderResult(search);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    clubListElement.movies = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
