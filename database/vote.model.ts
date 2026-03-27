import {Types,Schema,model,models} from 'mongoose'

export interface IVote{
    author:Types.ObjectId;
    id:Types.ObjectId;
    type:'question'|'answer';
    voteType:'upvote'|'downvote';
}

const VoteSchema = new Schema({
    author:{type:Schema.Types.ObjectId,ref:'User',required:true},
    id:{type:Schema.Types.ObjectId,required:true},
    type:{type:String,enum:['question','answer']},
    voteType:{type:String,enum:['upvote','downvote']}
},{timestamps:true})

const Vote = models?.Vote || model<IVote>('Vote',VoteSchema)

export default Vote;