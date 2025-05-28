export class Cart <T extends { id: number; price: number }> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter((item) => item.id !== id);
    }

    getItems(): T[] {
        return [...this.items];
    }

    totalAmount(): number {
        return this.items.reduce((acc, curr) => acc + curr.price, 0);
    }

    discountedTotal(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new Error('Discount must be between 0 and 100');
        }
        const total = this.totalAmount();
        return Math.round(total * (1 - discount / 100));
    }

    clear(): void {
        this.items = [];
    }
}

export default Cart;