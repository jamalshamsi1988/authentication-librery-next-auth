import { Schema , model , models } from "mongoose";


const userSchema = new Schema({

    email : {
        type : String ,
        required : true 
    },
    password :{
        type : String ,
        required : true
    },
    name :{
        type : String
    },
    lastName : {
        type :String
    },
    createdAt :{
        type : Date ,
        default : ()=> Date.now(),
        immutable : true  //if immutable is true we can not change the date;
    },
});

const User = models.User || model("User" , userSchema);

export default User;
