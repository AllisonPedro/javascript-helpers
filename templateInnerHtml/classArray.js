export class arrayConstructor {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    updateValueIndex(item, index) {
        this.array[index] = item;
    }
    remove(item) {

    }
    get() {
        return this.array;
    }
}