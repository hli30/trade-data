import { bulkInsertHeadlines, findSortedNewToOldHeadlines } from "../db/headline.db";

const dataMapping = (data) => {
    let mappedEntry = {
        source: data.source.name,
        title: data.title,
        description: data.description,
        content: data.content,
        publishedAt: data.publishedAt
    };

    return mappedEntry;
};

export const saveHeadlines = async (data) => {
    let latestEntry;
    let newEntries;

    //find the latest headline entry date
    try {
        latestEntry = await findSortedNewToOldHeadlines(1);
    } catch (err) {
        throw err;
    };

    //filter out headlines that had previously been saved
    //skip if there are no entries in db
    if (latestEntry.length !== 0) {
        data = data.filter(headline => {
            let newDataDate = new Date(headline.publishedAt);
            let latestEntryDate = new Date(latestEntry[0].publishedAt)
            
            return newDataDate > latestEntryDate;
        });
    };
    
    //map data to db schema
    newEntries = data.map(headline => dataMapping(headline));

    //only hit the db if there are new headlines from the api
    if (newEntries.length === 0) {
        throw 'no new data from api';
    } else {
        return bulkInsertHeadlines(newEntries);
    }
};

