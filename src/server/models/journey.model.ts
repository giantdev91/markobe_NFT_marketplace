import { Schema, model, Document, Types } from "mongoose";

export interface IJourney extends Document {
    title: String;
    image: String;
    description: String;
    startDate: Date;
    project: Types.ObjectId;
    rewards?: Types.Subdocument;
    quests?: Types.Subdocument;
    status: String;
}

export const JourneySchema = new Schema<IJourney>({
    title: String,
    image: String,
    description: String,
    startDate: Date,
    project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    rewards: {},
    quests: [],
    status: {
        type: String,
        enum: ["DRAFT", "ACTIVE", "COMPLETED", "EXPIRED"],
        required: true,
        // TODO: Add post hook to disallow activation without reward
    },
});

export const JourneyModel = model<IJourney>("Journey", JourneySchema);
