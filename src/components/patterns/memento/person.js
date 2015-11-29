import Memento from './memento';

export default class Person {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    createMemento(){
        return new Memento(this.name);
    }

    setMemento(memento){
        this.name = memento.getName();
    }

}
