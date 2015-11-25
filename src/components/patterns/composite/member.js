import ViewInterface from './viewInterface';

// leaf class
export default class Member extends ViewInterface {
    constructor(id, name){
        super();
        this.id = id;
        this.name = name;
    }

    getId(){ return this.id; }
    getInfo(){ return `Member : ${this.name}`; }
}
