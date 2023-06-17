import Users from "../modals/userModel.js";
import encrypt from "encryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        var secretkey = 'ios';
        var plaintext = password;
        var cipherText = encrypt.encrypt(plaintext, secretkey, 256);
        let random = "";
        const characters = 'ABCDEFGHIJKJLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz1234567890';
        const charLength = characters.length;
        let length = 100;
        for(var i=0; i<length; i++){
            random += characters.charAt(Math.floor(Math.random() * charLength));
        }
        const accessToken = random

        const user = new Users({
            name: name,
            email: email,
            password: cipherText,
            access_token: accessToken
        });


        setTimeout(async () => {
            await Users.updateOne({ _id: user._id }, { $unset: { access_token: 1 } });
        }, 4 * 60 * 60 * 1000);
     
    
        // res.json({ access_token: accessToken });
        await user.save();
        return res.send("Resgistration Succesfull!")

    } catch (error) {
        return res.send(error)
    }
}