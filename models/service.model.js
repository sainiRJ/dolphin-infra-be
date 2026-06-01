import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String },
    status: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);