import Users from "../modals/userModel.js";


export const generateTokenForUser = async(req, res) => {
    try {
        const { name, email} = req.body;
        const accessToken = "user-access-token";

        const user = new Users({
            name: name,
            email: email,
            access_token: accessToken
        });

        await user.save();

        res.json({ access_token: accessToken });

        setTimeout(async () => {
            await Users.updateOne({ _id: user._id }, { $unset: { access_token: 1 } });
        }, 4 * 60 * 60 * 1000);
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}