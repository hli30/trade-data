import { findSortedNewToOldHeadlines, IHeadline } from "../db/headline.db";

export const getHeadlines = async (req, res) => {
    let headlines;
    try {
        headlines = await findSortedNewToOldHeadlines(30);
    } catch (error) {
        res.status(500).send('Server Error!')
    };

    res.json(headlines).status(200)
}