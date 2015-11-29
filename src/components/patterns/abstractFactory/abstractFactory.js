import Factory1 from './factory1';
import Factory2 from './factory2';

export default class AbstractFactory{
    static getFactory(owner) {
        switch(owner) {
            case 'owner1':
                return new Factory1();
                break;
            case 'owner2':
                return new Factory2();
                break;
            default:
        }
    }
}

