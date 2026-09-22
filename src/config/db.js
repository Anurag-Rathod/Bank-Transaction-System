import mongoose from "mongoose";
async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to Database");
    } catch (error) {
        console.log("Error connecting to Database");
        console.log(error);

        process.exit(1);
    }
}

export default connectToDB;