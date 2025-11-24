const {
    updateUserProfile,
    getSingleProfile
} = require("./../services/profileService");

const updateProfileInfo = async (req, res) => {
    const { email, phone, address } = req.body;
    const { username } = req.user;

    try {
        const updated = await updateUserProfile(username, { email, phone, address });
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
};

const getProfileInfo = async (req, res) => {
    try {
        const profile = await getSingleProfile();
        return res.status(200).json(profile);
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { updateProfileInfo, getProfileInfo };
