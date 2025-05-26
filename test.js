const { describe, test, expect } = require('@jest/globals');
const Movie = require('./movie');
const Cart = require('./cart');

describe('Testing Cart class functionality', () => {
    let cart;
    beforeEach(() => {
        cart = new Cart();
    });

    test('Adding items and getting them back', () => {
        const book = {id: 1, title: 'JavaScript Handbook', price: 500};
        const album = {id: 2, title: 'Coldplay Album', price: 300};
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
        const book = {id: 1, title: 'JS Book', price: 500};
        const album = {id: 2, title: 'Music Album', price: 300};
        cart.addItem(book);
        cart.addItem(album);
    
        expect(cart.totalAmount()).toBe(800);
    });

    test('Applying discount correctly', () => {
        const book = {id: 1, title: 'JS Book', price: 500};
        const album = {id: 2, title: 'Music Album', price: 300};
        cart.addItem(book);
        cart.addItem(album);
    
        expect(cart.discountedTotal(10)).toBe(720); // 10% скидка
    });

    test('Removing item by its ID', () => {
        const book = {id: 1, title: 'JS Book', price: 500};
        const album = {id: 2, title: 'Music Album', price: 300};
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
});