import mongoose from "mongoose";


const Connection = async () => {
 
  const URL = `mongodb://127.0.0.1:27017/`;
  try {
    await mongoose.connect(URL); //,{ useNewUrlParser: true }
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting the DB", error);
  }
};

export default Connection;
