const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    desc: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
    },
    username: {
        type: String,
    },
    categories : {
        type: String,
    },
    createDate: {
        type: Date,
        default : new Date(),
    },
});


const Post = mongoose.model('POST', PostSchema)
module.exports = Post;