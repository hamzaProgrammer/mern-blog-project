const Post = require('../schema/Post_Schema')

//createing Blog
const createPost = async (req, res) => {
    try {
        const result = await new Post(req.body)// new document creating
        await result.save();
        res.status(200).send({message : "Blog Saved SuccessFully"})
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}

// getting all blogs
const getAllPosts = async (req, res) => {
    let username = req.query.username;
    let category = req.query.categories;
    let posts;
    try {
        if(username){
            posts = await Post.find({username : username});
        }
        if(category){
            posts = await Post.find({categories : category});
        }else if(!username && !category){
            posts = await Post.find({});
        }
        res.status(200).json(posts)
    } catch (e) {
        console.log(e)
    }
}

// getting single Blog Record
const getPost = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await Post.findById({_id : id});
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

// Updating single Blog Record
const updatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, {$set : req.body}); // here set will update whole data where this id matches
        res.status(200).json("Blog Updated SuccessFully")
    } catch (error) {
        console.log(error)
    }
}

// Deleting single Blog Record
const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const post = await Post.findById({
            _id: id
        }); // here set will update whole data where this id matches
        const resss = await post.delete();
        console.log(resss);
        res.status(200).json("Blog deleted SuccessFully")
    } catch (error) {
        console.log(`Error in backend API delet`  + error)
    }
}



module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
}