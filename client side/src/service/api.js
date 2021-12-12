import axios from 'axios';
const URL = 'http://localhost:5000'

// Creating Blog
export const createPost = async (post) => {
    try {
        console.log("Sending data to backend")
        return await axios.post(`${URL}/create` , post )
    } catch (error) {
        console.log(`Error while posting to Craete Post and error is : ` , error)
    }
}

// Getting All Blogs
export const getAllPosts = async (params) => {
    try {
        console.log("Sending data to backend")
        console.log(`{'${URL}/posts/${params}'}`)
        let res = await axios.get(`${URL}/posts${params}`)
        console.log(res)
        return res.data
    } catch (error) {
        console.log('Error while calling get function and error is ', error)
    }
}

// getiing Singel Blog
export const getPost = async (id) => {
    try {
        let res = await axios.get(`${URL}/post/${id}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// Update Singel Blog
export const updatePost = async (id, post) => {
    try {
        let res = await axios.post(`${URL}/updatePost/${id}`, post);
    } catch (error) {
        console.log(error)
    }
}


// Update Singel Blog
export const deletePost = async (id) => {
    try {
        console.log(id)
        const data = await axios.delete(`${URL}/deletePost/${id}`);
        console.log(data)
    } catch (error) {
        console.log('Erroe in API Deelete' + error)
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data)
    } catch (error) {
        console.log("Error while uploading file.image and error is : ", error)
    }
}
