import {model,Schema} from 'mongoose';

const CeoSchema = new Schema({
    id : {
        type : String,
        unique : true,
       
    },
    firstname : {
        type : String,
        require : true,
        unique : true
        
    },
    lastname : {
        type : String,
        require : true
    },
    age :{
        type : Number,
        Option :{
            min : 20
        },
        default : 30
    },
    business : [String],
    fortune : {
       type : Number,

    }
},{
     timestamps : false
});

export default model('CEO',CeoSchema);