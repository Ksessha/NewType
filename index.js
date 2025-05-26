const Movie = require('./movie');
const Cart = require('./cart');

const book = {id: 1, title: 'Книга JavaScript', price: 500};
const album = {id: 2, title: 'Альбом Coldplay', price: 300};
const movie = new Movie(3, 'Интерстеллар', ['Драма', 'Фантастика'], 169, 350, 8.6);

const cart = new Cart();
cart.addItem(book);
cart.addItem(album);
cart.addItem(movie);

console.log(cart.getItems());
console.log('Общая сумма:', cart.totalAmount());
console.log('Итого с учетом скидки:', cart.discountedTotal(10));
cart.removeItemById(3);
console.log('Корзина после удаления:', cart.getItems());
console.log('Новая общая сумма:', cart.totalAmount());