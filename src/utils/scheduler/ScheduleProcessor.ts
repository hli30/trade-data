export abstract class ScheduleProcessor {
    protected abstract interval: number;
    
    startRepeatingTask():void {
        this.task();
        setInterval(() => this.task(), this.interval);
    }

    protected abstract task():void;
}