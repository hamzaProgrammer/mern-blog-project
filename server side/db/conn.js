const mongoose = require("mongoose");
const DB = process.env.DB

mongoose.connect(DB, {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(() => {
    console.log("Mongoose Connection SuccessFull")
}).catch((e) => {
    console.log(e)
})