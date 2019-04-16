import { ScheduleProcessor } from "./ScheduleProcessor";
import { fetchHeadlines } from "../../services/reuters.service";
import { saveHeadlines } from "../../services/headline.service";

export class ReutersTask extends ScheduleProcessor{
    public interval: number;

    constructor(intervalInSeconds:number) {
        super();
        this.interval = intervalInSeconds * 1000;
    }

    task() {
        const fetchData = async () => {
            await fetchHeadlines()
                .then(res => {
                    return saveHeadlines(res);
                })
                .then(res => {
                    console.log('data saved');
                })
                .catch(err => {
                    console.log(err);
                });
        };
    }
}