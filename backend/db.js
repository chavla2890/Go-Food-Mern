const mongoose = require('mongoose');
const pass = 'Rahul2890'
const mongoURI = `mongodb+srv://akashchawla497:${pass}@cluster0.gxkgj7t.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0`;

//mongodb+srv://akashchawla497:${pass}@cluster0.gxkgj7t.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://akashchawla497:${pass}@cluster0.gxkgj7t.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0

const mongoDB= async() =>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology:true },async(err,result)=>{
        if(err){
            console.log("------",err);
        }else{

            console.log('conneted successfully');
            const fetched_data = await mongoose.connection.db.collection("food_items");
            // console.log(fetched_data);
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err,catData){
                    if(err){
                        console.log("-------",err);
                    }else{
                        global.food_items = data;
                        global.foodCategory = catData;
                        // console.log(global.food_items);
                    }
                 
                })

                // if(err){
                //     console.log("-------",err);
                // }else{
                //     global.food_items = data;
                //     // console.log(global.food_items);
                // }
            })
           
        }
        
});
}

module.exports = mongoDB;
