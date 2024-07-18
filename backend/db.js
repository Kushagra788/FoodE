const mongoose=require('mongoose');
const mongoURI='mongodb://Kushagra:Kushagra123@ac-wk8ixmz-shard-00-00.brwgaux.mongodb.net:27017,ac-wk8ixmz-shard-00-01.brwgaux.mongodb.net:27017,ac-wk8ixmz-shard-00-02.brwgaux.mongodb.net:27017/FoodE?ssl=true&replicaSet=atlas-l1dcxb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Food'
const mongoDB=async()=>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
    console.log("connected")
    const fetched_data=await mongoose.connection.db.collection("Data");
    fetched_data.find({}).toArray(async function(err,data){
        const foodCategory=await mongoose.connection.db.collection("Category");
        foodCategory.find({}).toArray(function(err,catData){
            if(err)console.log(err);
            else{
            global.Data=data; //food items data
            global.Category=catData; //food category data
            }
        })
    })
}
    });
}
module.exports=mongoDB;
