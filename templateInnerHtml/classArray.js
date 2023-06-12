export class arrayConstructor {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }

    get() {
        return this.array;
    }
}