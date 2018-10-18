export class StrategyData {

    default:String;
    strategies:String[];

    constructor(raw:{default:String[],strategies:String[]}) {
        this.default = raw.default[0];
        this.strategies = raw.strategies;
    }

}