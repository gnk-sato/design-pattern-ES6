export default class Test {
    constructor(name){
        this.name     = name;
        this.score    = null;
        this.strategy = null;
    }

    getName(){
        return this.name;
    }
    getScore(){
        return this.score;
    }

    setScore(score){
        this.score = score;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    getEvaluation(){
        if(this.score)
            return this.strategy.check(this.score);
        else
            return 'Has no score.';
    }
}
