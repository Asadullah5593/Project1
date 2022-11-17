var mongoose = require("mongoose");

async function initializeDBConnection() {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("MongoDB connected successfully...")
    } catch (error) {
        throw new Error("Unable to connect to the MongoDB...")
    }
}
module.exports = initializeDBConnection;