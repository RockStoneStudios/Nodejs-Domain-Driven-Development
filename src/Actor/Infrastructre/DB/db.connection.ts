import mongoose from 'mongoose';



export default mongoose.connect(process.env.DB|| "mongodb://localhost:27017/ceos").then(()=>{
     console.log('Database Connected Succesfull');
}).catch(error =>{
    console.log(error);
});

