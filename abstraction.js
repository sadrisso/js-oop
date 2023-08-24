class BetterArray {

    constructor(item) {
        this.item = [];
    }

    getItem() {
        return [...this.item];
    }

    addItem(item) {
        return this.item.push(item);
    }

    removeItem(toRemoveItem) {
        return this.item = this.item.filter((item) => item !== toRemoveItem);
    }
}

const array = new BetterArray();
array.addItem('I love bangladesh');
array.addItem('I love javascript');
array.removeItem('I love javascript');
console.log(array.getItem());