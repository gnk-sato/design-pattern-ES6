import ObserverBase from './observerBase';

export default class Observer1 extends ObserverBase {
    done(updatedValue){
        console.log('"ChangeValue!" from Observer1.')
    }
}

