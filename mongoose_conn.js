const mongoose = require("mongoose");
async function mongo_conn(url) {
    return mongoose.connect(url);
}
module.exports = {
    mongo_conn
};