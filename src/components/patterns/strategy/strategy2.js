import StrategyBase from './strategyBase';

export default class Strategy2 extends StrategyBase {
    check(num){
        if(num >= 80)
            return 'Very good!';
        else if(num >= 60)
            return 'OK';
        else if(num >= 40)
            return 'So-so';
        else
            return 'Fuck';
    }
}
