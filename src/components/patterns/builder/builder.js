import Person from './person';

export default class Builder {
    constructor(){
        this.name = [];
    }
    
    addFirstName(){
        this.name.push("Ryoko");
    }

    addMiddleName(){
        this.name.push("K");
    }

    addLastName(){
        this.name.push("Takahashi");
    }

    getPerson(){
        const person = new Person(this.name.join(','));
        this.name = [];
        return person;
    }
}
