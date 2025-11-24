const Profile = require("../models/profileModel");

exports.updateUserProfile = async (username, updateFields) => {
    return await Profile.findOneAndUpdate(
        { username },
        { $set: updateFields },
        { new: true }
    );
};

exports.getSingleProfile = async () => {
    return await Profile.findOne();
};
exports.registerProfile = async (data, file) => {
  const { name, designation, content } = data;
    
   
}


