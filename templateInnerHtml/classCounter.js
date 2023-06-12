export class ClassCounter{
    constructor(){
        this.count = 0;
    }
    increment(){
        this.count++;
    }
    decrement(){
        this.count ? this.count-- : this.count;
    }
    getCount(){
        return this.count;
    }
}