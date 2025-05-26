class Movie {
    constructor(id, title, genres, duration, price, rating) {
        this.id = id;
        this.title = title;
        this.genres = genres;
        this.duration = duration;
        this.price = price;
        this.rating = rating;
    }

    toString() {
        return `Фильм "${this.title}" (${this.genres.join(', ')}) - ${this.duration} мин., цена: ₽${this.price}, рейтинг: ${this.rating}/10`;
    }
}

module.exports = Movie;