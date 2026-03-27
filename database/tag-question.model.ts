import { Types, Schema, model, models } from "mongoose";

export interface ITagQuestion {
    tag:Types.ObjectId;
    question:Types.ObjectId;
}

const TagQuestionSchema = new Schema(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
  },
  { timestamps: true },
);

const TagQuestion =
  models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);
export default TagQuestion;
