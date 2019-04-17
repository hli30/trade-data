import Headline, { IHeadline, bulkInsertHeadlines } from "../db/headline.db";

const dataMapping = (data) => {
    let mappedEntry = {
        source: data.source.name,
        title: data.title,
        content: data.content,
        publishedAt: data.publishedAt
    };

    return mappedEntry;
};

export const saveHeadlines = async (data) => {
    let dbEntries = data.map(headline => dataMapping(headline));
    return await bulkInsertHeadlines(dbEntries);
};

