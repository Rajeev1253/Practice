import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        street:{
            type:String,
            required:true
        },
        suite:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        zipcode:{
            type:String,
            required:true
        },
        geo:{
            lat:{
                type:String,
                required:true
            },
            lng:{
                type:String,
                requried:true
            }
        }

    },
    phone:{
        type:String,
        required:true,
    },
    website:{
        type:String,
        required:true,
    
    },
    company:{
        CompanyName:{
            type:String,
            required:true
        },
        catchPhrase:{
            type:String,
            required:true,
        },
        bs:{
            type:String,
            required:true,

        }

    }


})
export const userModel = mongoose.model('user',userSchema);