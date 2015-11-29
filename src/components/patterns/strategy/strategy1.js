import StrategyBase from './strategyBase';

export default class Strategy1 extends StrategyBase {
    check(num){
        if(num >= 90)
            return 'Excellent!';
        else if(num >= 80)
            return 'Good';
        else if(num >= 40)
            return 'So-so';
        else
            return 'Bad';
    }
}
