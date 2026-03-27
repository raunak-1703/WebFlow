import {Schema,model,models} from 'mongoose'

export interface ITags{
    name:string;
    questions?:number;
}

const TagSchema = new Schema({
    name:{type:String,required:true,unique:true},
    questions:{type:Number,default:0},
},{timestamps:true})

const Tag = models?.Tag || model<ITags>('Tag',TagSchema)
export default Tag;