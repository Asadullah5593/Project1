var mongoose = require("mongoose");

async function initializeDBConnection() {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Database connection successfull..!!")
    } catch (error) {
        throw new Error("Unable to connect to the Database..!!")
    }
}

module.exports = initializeDBConnection;