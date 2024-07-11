const mongoose = require("mongoose");

export default async function connect(){
    try {

        const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASS}@cluster0.sdpuocy.mongodb.net/`;

        mongoose.connect(uri);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("mongodb connected successfully");
            
        })

        connection.on('error', (err) => {
            console.log("mongodb connection error. please make sure MongoDb is running", err);
            process.exit();
        })

    } catch (error) {
        console.log('something went wrong');
        console.log(error);
        
    }
}