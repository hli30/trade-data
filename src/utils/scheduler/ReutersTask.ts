import { ScheduleProcessor } from "./ScheduleProcessor";

export class ReutersTask extends ScheduleProcessor{
    public interval: number;

    constructor(intervalInSeconds:number) {
        super();
        this.interval = intervalInSeconds * 1000;
    }

    task() {
        console.log('task performed')
    }
}