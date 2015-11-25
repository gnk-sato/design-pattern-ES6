import NameBase from './nameBase';

export default class Name extends NameBase {
    addFirstName(name){
        this.firstName = name;
    }

    addLastName(name){
        this.lastName = name;
    }

    nameView(){
        return `${this.firstName} ${this.lastName}`;
    }
}
