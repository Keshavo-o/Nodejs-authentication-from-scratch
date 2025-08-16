const user = require("../models/user.js");
const url = require("../models/url.js");
const {v4: uuidv4} = require("uuid")
const { setuser } = require("../services/auth.js");

async function handleUserRequest(req, res) {
    return res.json({ message: "User route" });
}
async function handleusersignup(req, res) {
    return res.render("sign_up");
}
async function handlecreateuser(req, res) {
    const user_obj = req.body;
    await user.create(
            {
                name: user_obj.name,
                email: user_obj.email,
                password: user_obj.password
            }
    );
    return res.json({ message: "User created", user: user_obj });
}
async function handleloginuser(req, res) {
    return res.render("login");
}
async function handleloginform(req, res) {
    const user_obj = req.body;
    const userData = await user.findOne({ name: user_obj.name, password: user_obj.password });
    const all_urls = await url.find({});
    if (userData) {
    const session_id = uuidv4();
    setuser(session_id, userData);
    res.cookie("uid", session_id);
    //You can set a cookie also from request directly as 
    //res.cookie(cookie_name, cookie_value)
    return res.render("home", { user: userData,
        urls: all_urls
     });
    } else {
        return res.render("login", { message: "Invalid credentials, try again" });
    }
}
module.exports = {
    handleUserRequest,
    handleusersignup,
    handlecreateuser,
    handleloginuser,
    handleloginform
};
