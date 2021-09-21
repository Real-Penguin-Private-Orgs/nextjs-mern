import { Schema, Document, model } from "mongoose";

export interface Company extends Document {
    name: string;
    owner: string;
    website: string;
    products: any[];
    logo: string;
    created_at: Date;
}

const schema = new Schema<Company>({
     name: {
         type: String,
         required: true
     },
     owner: {
        type: String,
        required: true
     },
     website: {
         type: String
     },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "foods"
        }
    ],
    logo: {
        type: String,
        required: true
    },
     created_at: {
         type: Date,
         default: () => new Date()
     }
})

export default model<Company>('Company', schema);