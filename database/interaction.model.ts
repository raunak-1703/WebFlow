import {model,models,Types,Schema} from 'mongoose'

export interface IInteraction{
    user:Types.ObjectId;
    action:string;
    actionId:Types.ObjectId;
    actiontype:'question'|'answer';
}

const InteractionSchema = new Schema({
    user:{type:Schema.Types.ObjectId,ref:'User',required:true},
    action:{type:String,required:true},
    actionId:{type:Schema.Types.ObjectId,required:true},
    actiontype:{type:String,enum:['question','answer']}
},{timestamps:true})

const Interaction = models?.Interaction || model<IInteraction>('Interaction',InteractionSchema)
export default Interaction;