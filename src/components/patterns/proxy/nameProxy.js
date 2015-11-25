import NameBase from './nameBase';

export default class NameProxy extends NameBase {
    constructor(nameClass){
        super();
        this.nameClass = nameClass;
    }

    nameView(){
        return `His Name: ${this.nameClass.nameView()} <- (proxy class)`;
    }
}
