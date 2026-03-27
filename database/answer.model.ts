import {Schema,models,model,Types} from 'mongoose'

export interface IAnswer{

}

const AnswerSchema = new Schema ({
    
})

const Answer = models?.Answer || model<IAnswer>('Answer',AnswerSchema)