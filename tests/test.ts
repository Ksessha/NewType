import { describe, test, expect, beforeEach } from '@jest/globals';
import { Movie } from '../src/movie';
import { Cart } from '../src/cart';

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

describe('Testing Cart class functionality', () => {
    let cart: Cart<Book | Album | Movie>;

    beforeEach(() => {
        cart = new Cart<Book | Album | Movie>();
    });

    test('Adding items and getting them back', () => {
        const book: Book = { id: 1, title: 'JavaScript Handbook', price: 500 };
        const album: Album = { id: 2, title: 'Coldplay Album', price: 300 };
        const movie = new Movie(3, 'Interstellar', ['Drama', 'Sci-Fi'], 169, 350, 8.6);
        
        cart.addItem(book);
        cart.addItem(album);
        cart.addItem(movie);
    
        expect(cart.getItems()).toHaveLength(3);
        expect(cart.getItems()[0]).toEqual(book);
        expect(cart.getItems()[1]).toEqual(album);
        expect(cart.getItems()[2].title).toBe('Interstellar');
    });

    test('Calculating total amount without discount', () => {
        const book: Book = { id: 1, title: 'JS Book', price: 500 };
        const album: Album = { id: 2, title: 'Music Album', price: 300 };
        
        cart.addItem(book);
        cart.addItem(album);
    
        expect(cart.totalAmount()).toBe(800);
    });

    test('Applying discount correctly', () => {
        const book: Book = { id: 1, title: 'JS Book', price: 500 };
        const album: Album = { id: 2, title: 'Music Album', price: 300 };
        
        cart.addItem(book);
        cart.addItem(album);
    
        expect(cart.discountedTotal(10)).toBe(720); // 10% discount
        expect(cart.discountedTotal(50)).toBe(400); // 50% discount
    });

    test('Removing item by its ID', () => {
        const book: Book = { id: 1, title: 'JS Book', price: 500 };
        const album: Album = { id: 2, title: 'Music Album', price: 300 };
        
        cart.addItem(book);
        cart.addItem(album);
    
        cart.removeItemById(1);
        expect(cart.getItems()).toHaveLength(1);
        expect(cart.getItems()[0].title).toBe('Music Album');
    });

    test('Empty cart should have zero total amount', () => {
        expect(cart.totalAmount()).toBe(0);
    });

    test('Discount on empty cart should be zero', () => {
        expect(cart.discountedTotal(10)).toBe(0);
    });

    test('Should throw error for invalid discount values', () => {
        expect(() => cart.discountedTotal(-10)).toThrow('Discount must be between 0 and 100');
        expect(() => cart.discountedTotal(110)).toThrow('Discount must be between 0 and 100');
    });
});