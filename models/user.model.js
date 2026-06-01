import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: String,
    email: {type: String, unique: true},
    password: String,
    role: String,
    refreshToken: String,
},{timestamps: true})


const User = mongoose.model("User", userSchema);

export default User