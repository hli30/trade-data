export abstract class ScheduleProcessor {

    protected abstract interval: number;

    constructor() {
    } 
    
    startRepeatingTask():void {
        setInterval(() => this.task(), this.interval)
    }

    protected abstract task():void;
}