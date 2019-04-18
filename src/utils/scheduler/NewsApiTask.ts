import { ScheduleProcessor } from "./ScheduleProcessor";
import { fetchHeadlines } from "../../services/newsApi.service";
import { saveHeadlines } from "../../services/headline.service";

export class NewsApiTask extends ScheduleProcessor{
    //sets call per seconds according to api call limit
    //*1000ms to convert to seconds
    //max calls per day = ~180seconds/call
    protected interval:number = 180 * 1000;

    constructor() {
        super();
    };

    task() {
        fetchHeadlines()
            .then(res => saveHeadlines(res))
            .catch(err => console.log(err));
    };
};