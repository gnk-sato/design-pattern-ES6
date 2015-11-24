import Builder from './builder';

export default class Director2 {

    createPerson(){
        const builder = new Builder();
        builder.addFirstName();
        builder.addMiddleName();
        builder.addLastName();
        return builder.getPerson();
    }
}
