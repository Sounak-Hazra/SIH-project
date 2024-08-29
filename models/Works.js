import mongoose from "mongoose";

export default workSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
    },
    description: {
        type: String,
        require: [true, "Description is required"],
    },
    status: {
        type: String,
        require: [true, "Status is required"],
        default: "posted",
    },
    postedby: {
        type: mongoose.Schema.Types.ObjectId,//add user hear
        required: [true, "Posted by is required"],
        ref: "User",
    },
    workinguser: {
        type: mongoose.Schema.Types.ObjectId,//add user hear
        ref: "User",

    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});