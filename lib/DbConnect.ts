import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};



const ConnectMongoDB = async () => {
  try {

    if (connection.isConnected) {
      console.log("already connected to the database");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectMongoDB;