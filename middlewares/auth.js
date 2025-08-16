const{setuser,
    getuser,
    removeuser
} = require("../services/auth.js"); 
async function restrictoLoginuseronly(req,res,next){
    console.log("Inside restrictoLoginuseronly");
    const userid = req.cookies.uid;

    if(!userid){
        return res.redirect("/user/login");
    }
    const user = getuser(userid);
    if(!user){
        return res.redirect("/user/login");
    }
    req.user = user;
    console.log("exiting restrictoLoginuseronly");
    next();
}
module.exports = {
    restrictoLoginuseronly
};