const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    email:String,
    phone:String,
    address:String

})

const Profile = new mongoose.model("Profile",profileSchema);

module.exports = Profile;