import { Schema, Document, model } from "mongoose";

export interface Food extends Document {
    brand: string;
    flavour: string;
    company: Schema.Types.ObjectId;
    logo: string;
    added_at: Date;
}

const schema = new Schema<Food>({
    brand: {
        type: String,
        required: true
    },
    flavour: {
        type: String,
        required: true
    },
    company: { 
        type: Schema.Types.ObjectId,
        ref: "companies"
    },
    logo: {
        type: String,
        required: true
    },
    added_at: {
        type: Date,
        default: () =>  new Date()
    }
})

export default model<Food>("Food", schema);