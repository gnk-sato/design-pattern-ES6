import Builder from './builder';

export default class Director1 {

    createPerson(){
        const builder = new Builder();
        builder.addFirstName();
        builder.addLastName();
        return builder.getPerson();
    }
}
