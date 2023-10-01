const express = require('express');
const mg = require('mongoose');
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const v = require('validator');
const cors = require('cors');
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
app.use(bp.json());

mg.connect('mongodb://127.0.0.1:27017/signin2',{useNewUrlParser: true,
useUnifiedTopology: true,}).then(()=>{console.log('Success')}).catch((err)=>{console.error(err)})
const mySchema = new mg.Schema({
    fname : {
        type : String,
        required : true ,
    },
    lname :{
        type : String,
        required:true
    },

    email: {
        type: String,
        validate(val){
            if(!v.isEmail(val)){
                throw new Error('Enter valid email id.')
            }
        }
    },
    user :{
        type:String, 
        minlength:[6,'Minimum length should be 6']
    },
    password :{
        type : String ,
        minlength : [8,'Minimum length should be 8'],
        // validate : function (val){
        //     return validator.isStrongPassword(val,{
        //         minlength : 8,
        //         minUppercase: 1,
        //         minNumbers: 1,
        //         minSymbols: 1,
        //     })
        // },
        message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",

    },
    pass : {
        type: String,
        required: true,
    //     validate: {
    //         validator: function (value) {
    //         return value === this.password;
    //     },
    //         message: "Passwords must match.",
    //     },
     }
});

const User = new mg.model('User',mySchema)

app.post('/signin',async(req,res)=>{
    try {
        
        const {email , password} = req.body;
        const loginuser = await User.findOne({ email });
        if (!loginuser){
            return res.status(401).json({error : 'User not found.'});
        }

        const passwordMatch = await bcrypt.compare(password , loginuser.password);
        if (!passwordMatch){
            return res.status(401).json({ message : 'Invalid Password.'});
        }
        const uname = loginuser.user
        res.json({ message : 'Login successful.',uname : uname})
    }catch(error){
        res.status(500).json({ error : 'An error occured.'});
    }
});
app.post('/register',async(req,res)=>{
    
    try {
        const {fname , lname , email , password  ,pass, user} = req.body ;
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword)
    
        const newUser = new User({
            fname,
            lname,
            email,
            password: hashedPassword,
            pass,
            user,
          });
        console.log(newUser)
        const saveUser = await newUser.save();
        console.log(saveUser)
        console.log('noo')
        res.status(201).json({ message : 'User Signed up successfully. '});
    } catch(error){
        res.status(500).json({ error : 'An error occurred.'});
    }
});
app.listen(4000)