import mongoose from "mongoose";


const bidSchema = new mongoose.Schema({
    bidAmount: {
        type: Number,
        require: [true, "Bid amount is required"],
    },
    bidby: {
        type: mongoose.Schema.Types.ObjectId,//add user hear
        ref: "User",
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,//add user hear
        ref: "Project",
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



const bidsSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,//add user hear
        ref: "Project",
    },
    bids: [bidSchema],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const projectSchema = new mongoose.Schema({
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
    bids: bidsSchema,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});


export default mongoose.models.project || mongoose.model('Project', projectSchema);