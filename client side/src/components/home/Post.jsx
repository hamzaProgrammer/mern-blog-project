import { Box , Typography , makeStyles} from '@material-ui/core'
import React from 'react'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        height : '350px',
        margin : '10px',
        border : '1px solid #d2cede',
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        borderRadius : '10px',
        '& > *' : {
            padding : '0 5px 5px 5px'
        }
    },
    image : {
        height : '150px',
        width : '100%',
        objectFit : 'cover',
        borderRadius : '10px 10px 0 0'
    },
    text : {
        color : '#878787',
        fontSize : '12px'
    },
    heading : {
        fontSize : '18px',
        fontWeight : 600,
        textAlign: 'center'
    },
    detail : {
        fontSize : 14,
        wordBreak : 'break-word'
    }
}));

const addElipses = (str , limit) => {
    return str.length > limit ? str.substring(0,100) +  '...' : str
}
const Post = (props) => {
    const classes = useStyles();
    const url = props.post.pic ? props.post.pic : 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fCUyM2NvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    return (
        <>
            <Box className={classes.container}>
                <img src={url}  alt="Alternate" className={classes.image} />
                <Typography className={classes.text}>{props.post.categories}</Typography>
                <Typography className={classes.heading}>{addElipses(props.post.title)}</Typography>
                <NavLink to={`/?username=${props.post.username}`} style={{textDecoration : 'none' , color : 'inherit'}}>
                    <Typography className={classes.text}>Author : {props.post.username}</Typography>
                </NavLink>
                <Typography className={classes.detail}>{addElipses(props.post.desc , 100)} </Typography>
            </Box>
        </>
    )
}

export default Post
