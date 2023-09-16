import { Schema, model, Document, Types } from "mongoose";

interface ITask {
    taskName: String;
    taskType: String;
    taskTitle: String;
    [key: string]: any;
}

export interface IQuest extends Document {
    title: String;
    image: String;
    description: String;
    status: String;
    startDate: Date;
    endDate: Date;
    project: Types.ObjectId;
    eligibility: IEligibility;
    tasks?: ITask[];
    rewards?: Types.ObjectId[];
    // MB: ??? Not sure is needed
    // completions         Completion[]  @relation("UserQuestCompletion")
    /// ---------delayed----------///
    // isRecurrent: Boolean;
    // recurrenceInterval: String;
}
export interface IEligibility {
    eligibilityType: String;
    network?: String;
    contractAddress?: String;
    tokenAmount?: String;
    channelId?: String;
    roleType?: String;
}

export const QuestSchema = new Schema<IQuest>({
    title: String,
    image: String,
    description: String,
    status: {
        type: String,
        enum: ["DRAFT", "ACTIVE", "COMPLETED", "EXPIRED"],
        required: true,
        // TODO: Add post hook to disallow activation without reward
    },
    startDate: Date,
    endDate: Date,
    tasks: [],
    project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
    rewards: {},
    eligibility: {},
    /////////////////----Recurence------/////////////////////
    //isRecurrent: { type: Boolean, default: false },
    //recurrenceInterval: String,
});

export const QuestModel = model<IQuest>("Quest", QuestSchema);
