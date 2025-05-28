import { Movie } from './movie';
import { Cart } from './cart';

interface Book {
    id: number;
    title: string;
    price: number;
}

interface Album {
    id: number;
    title: string;
    price: number;
}

const book: Book = { id: 1, title: 'Книга JavaScript', price: 500 };
const album: Album = { id: 2, title: 'Альбом Coldplay', price: 300 };
const movie = new Movie(3, 'Интерстеллар', ['Драма', 'Фантастика'], 169, 350, 8.6);

const cart = new Cart<Book | Album | Movie>();
cart.addItem(book);
cart.addItem(album);
cart.addItem(movie);

console.log('Содержимое корзины:', cart.getItems());
console.log('Общая сумма:', cart.totalAmount());
console.log('Итого с учетом скидки:', cart.discountedTotal(10));

cart.removeItemById(3);
console.log('Корзина после удаления:', cart.getItems());
console.log('Новая общая сумма:', cart.totalAmount());