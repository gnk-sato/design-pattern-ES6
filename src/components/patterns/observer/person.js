import _ from 'lodash';

export default class Person {
    constructor(id, name){
        this.id   = id;
        this.name = name;
        this.observers = [];
    }

    addObserver(o){
        this.observers.push(o);
    }

    notifyObservers(updatedValue){
        _.each(this.observers, (observer) => {
            observer.done(updatedValue);
        })
    }

    setName(name){
        this.name = name;
        this.notifyObservers(this.name);
    }

    getName(){
        return this.name;
    }


}
