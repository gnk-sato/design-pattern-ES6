import ObserverBase from './observerBase';

export default class Observer2 extends ObserverBase {
    done(updatedValue){
        console.log('"ChangeValue!" from Observer2.')
    }
}

