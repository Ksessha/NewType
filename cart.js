class Cart {
    #items = [];

    addItem(item) {
        this.#items.push(item);
    }

    removeItemById(id) {
        this.#items = this.#items.filter((item) => item.id !== id);
    }

    getItems() {
        return [...this.#items];
    }

    totalAmount() {
        return this.#items.reduce((acc, curr) => acc + curr.price, 0);
    }

    discountedTotal(discount) {
        const total = this.totalAmount();
        return Math.round(total * (1 - discount / 100));
    }
}

module.exports = Cart;