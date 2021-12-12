import React , {useState , useEffect} from 'react'
import Post from './Post'
import {Grid } from '@material-ui/core'
import { NavLink , useLocation } from 'react-router-dom';
import {getAllPosts} from '../../service/api'


const Posts = () => {
    const [allPosts , setAllPost] = useState({})
    const {search} = useLocation();
    console.log(search)
    const fetchData = async () => {
            let data = await getAllPosts(search);
            setAllPost(data);
    }
    useEffect(() => {
        fetchData();
    },[search])

    return (
        <>
        {
        Object.values(allPosts).map(post => (
            <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <NavLink to={`/details/${post._id}`} style={{textDecoration: 'none' , color :'inherit'}}>
                <Post post={post} />
            </NavLink>
            </Grid>
        ))
    }
        </>
    )
}

export default Posts
