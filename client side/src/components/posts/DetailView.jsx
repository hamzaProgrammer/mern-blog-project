import React, {useState , useEffect}from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {NavLink} from 'react-router-dom'
import {getPost , deletePost} from '../../service/api'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container : {
        padding : '0 100px',
        marginTop : '60px',
        [theme.breakpoints.down('md')] : {
            padding : '0px'
        }
    },
    img : {
        width : '100%',
        maxHeight : '40vh',
        objectFit : 'cover'
    },
    icons : {
        float : 'right'
    },
    icon : {
        margin : '5px',
        border : '1px solid #878787',
        padding : '5px',
        borderRadius : '10px'
    },
    heading : {
        fontSize : '35px',
        fontWeight : '600',
        textAlign : 'center',
        margin : '50px 0 10px 0'
    },
    subHeading : {
        color : '#878787',
        display : 'flex',
        margin : '20px 0',
        [theme.breakpoints.down('md')]: {
            display : 'block'
        }
    }
}))

const DetailView = ({match}) => {
    const classes = useStyles()
    const  history = useHistory();
    const [post , setPost] = useState({})

    const fetchData = async () => {
        const data = await getPost(match.params.id);
        setPost(data)
    }

    useEffect(() => {
        fetchData();
    },[])

    // deleting blog
    const deletBlog = async() => {
        const res = await deletePost(match.params.id)
        console.log(res)
        history.push('/')
    }
    return (
        <>
            <Box className={classes.container}>
                <img className={classes.img} src= {post.pic ? post.pic : "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fCUyM2NvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}   alt="here" />

                <Box className={classes.icons}>
                    <NavLink to={`/updateBlog/${post._id}`}>  <EditIcon className={classes.icon} color="primary"/> </NavLink>
                    <DeleteIcon className={classes.icon} onClick={() => deletBlog()} color="error"/>
                </Box>
                <Typography className={classes.heading}>{post.title}</Typography>

                <Box className={classes.subHeading}>
                <NavLink to={`/?username=${post.username}`} style={{textDecoration : 'none' , color : 'inherit'}}>
                    <Typography className={classes.text}>Author : {post.username}</Typography>
                </NavLink>
                    <Typography style={{marginLeft : 'auto'}}>Date : {new Date(post.createDate).toDateString()} </Typography>
                </Box>
                <Typography>{post.desc}</Typography>
            </Box>
        </>
    )
}

export default DetailView
