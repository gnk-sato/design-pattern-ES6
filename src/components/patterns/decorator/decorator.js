import NameBase from './nameBase';

export default class Decorator extends NameBase {

    constructor(nameClass){
        super();
        this.nameClass = nameClass;
    }

    getName(){
        let name = ["DECORATE"];
        name.push(this.nameClass.getName());
        name.push("DECORATE");
        return name.join("  ");
    }
}
