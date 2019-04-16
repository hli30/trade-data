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
    content: { type: String, required: true, lowercase: true},
    publishedAt: { type: Date, required: true}
});

const Headline = mongoose.model<IHeadline>('Headline', headlineSchema);
export default Headline;

export const bulkInsertHeadlines = async (entries) => {
    console.log(`inserting ${entries.length} entries`);
    return await Headline.create(entries, (err, headlines) => {
        if (err) {
            console.log(err._message)
            return err;
        };  
    });
};