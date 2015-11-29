export default class Person {
    constructor(name){
        this.id   = 'person';
        this.name = name;
    }

    setAddress(adress){
        this.adress = adress;
    }

    visit(visitor){
        visitor.setTarget(this);
        visitor.printInfo();
    }

    getId(){ return this.id; }
    getName(){ return this.name; }

}
