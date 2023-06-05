import mongoose from "mongoose";

export const connection = async(username,password) => {
    try{
         const URL = `mongodb://${username}:${password}@ac-sqofzmz-shard-00-00.cpxoupz.mongodb.net:27017,ac-sqofzmz-shard-00-01.cpxoupz.mongodb.net:27017,ac-sqofzmz-shard-00-02.cpxoupz.mongodb.net:27017/?ssl=true&replicaSet=atlas-ig4oj6-shard-0&authSource=admin&retryWrites=true&w=majority`;
           await mongoose.connect(URL, {useUnifiedTopology:true,useNewUrlParser:true})
           mongoose.set('strictQuery', false);
           console.log('database connected successfully and')
    } catch (error) {
        console.log('error while connecting with database',error.message);
    }
}