import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Username is required"],
        unique: [true, "Username is already taken"],
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: [true, "Email is already taken"],
    },
    password: {
        type: String,
        require: [true, "Password is required"],
    },
    isverivied:{
    type: Boolean,
    default: false,
    },
    verificationToken: {
        type: String,
    },
    verificationTokenExpires: {
        type: Date,
        default: Date.now() + 24 * 60 * 60 * 1000
    },

    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpires: {
        type: Date,
        default: Date.now() + 24 * 60 * 60 * 1000
    },
})


export default mongoose.models.user || mongoose.model('User', userSchema);