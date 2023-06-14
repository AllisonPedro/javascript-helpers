export class arrayConstructor {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    put(item, index) {
        this.array[index] = item;
    }
    delete(index) {
        this.array.splice(index, 1);
    }
    getAll() {
        return this.array;
    }
}