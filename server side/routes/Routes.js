const {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    uploadFile
} = require('../controller/Post_controller');
const express = require('express')
const router = express.Router();

// Adding new Blog
router.post('/create', createPost);

// Getting All Blogs
router.get('/posts', getAllPosts);

// Getting Single Blogs
router.get('/post/:id', getPost);

// Getting Single Blogs
router.post('/updatePost/:id', updatePost);

// Deeleting Single Blogs
router.delete('/deletePost/:id', deletePost);


module.exports = router;