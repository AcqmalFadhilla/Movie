class cardItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.url_image = "https://image.tmdb.org/t/p/w500";
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top"
               src="${this.url_image + this._movie.poster_path}"
               alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${this._movie.title}</h5>
            <p class="card-text">${this._movie.overview}</p>
            <div class="d-flex justify-content-between align-items-center">
              <a href="#" class="btn btn-primary">Go somewhere</a>
              <small class="text-muted">${this._movie.vote_avarage}</small>
            </div>
          </div>
        </div>
      </div>
        `
    }
}

customElements.define("card-item", cardItem);