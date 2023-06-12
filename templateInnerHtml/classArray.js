export class arrayConstructor {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
        // this.array.map((item, index) => {
        //     if (item.position !== index + 1) {
        //         item.position = index + 1;
        //     }
        // });
    }
    remove(item) {

    }
    get() {
        return this.array;
    }
}