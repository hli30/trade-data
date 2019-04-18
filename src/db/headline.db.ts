import mongoose, { Schema, Document } from 'mongoose';

export interface IHeadline extends Document {
    source: string,
    title: string,
    content: string,
    publishedAt: Date
};

const headlineSchema: Schema = new Schema({
    source: { type: String, required: true, lowercase: true},
    title: { type: String, required: true, lowercase: true},
    description: { type: String, lowercase: true},
    content: { type: String, lowercase: true},
    publishedAt: { type: Date, required: true}
});

const Headline = mongoose.model<IHeadline>('Headline', headlineSchema);
export default Headline;

export const bulkInsertHeadlines = (entries) => {
    return Headline.create(entries, (err, headlines) => {
        if (err) throw err;  
        console.log(`inserted ${headlines.length} document/s`);
    });
};

export const findSortedNewToOldHeadlines = (numberOfRecord:number) => {
    return Headline
        .find()
        .sort({publishedAt: -1})
        .limit(numberOfRecord)
        .exec()
        .then(headlines => headlines)
        .catch(err => {throw err});
};