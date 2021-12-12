import React , {useState, useEffect} from 'react'
import { Box  , Button, FormControl,  InputBase, makeStyles, TextareaAutosize} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { getPost , updatePost } from '../../service/api';
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
    form :{
        display :'flex',
        marginTop : '10px',
        flexDirection : 'row',
    },
    textField : {
        flex : 1,
        margin : '0 30px',
        fontSize : '25px'
    },
    textArea : {
        width : '100%',
        marginTop : '50px',
        border : 'none',
        fontSize : '18px',
        '&:focus-visibile':{
            outline : 'none',
            border : 'none'
        }
    }
}))
const iniValues = {
    title: '',
    desc: '',
    pic: '',
    username: 'coddforInterview',
    categories: 'all',
    createDate: new Date()
}

const UpdateView = ({match}) => {
    const history = useHistory()
    const classes = useStyles();
    const url = "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fCUyM2NvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    const [post, setNewPost] = useState(iniValues);

    // habdling onchnage data
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewPost({...post, [name]:value})
    }

    // calling API to update
    const updateBlog = async() => {
        const data = await updatePost(match.params.id , post)
        window.alert("Blog SuccessFully Updated");
        history.push(`/details/${match.params.id}`);
    }

    // calling api to get single Blog result/data
    const getThePost = async() => {
        const data = await getPost(match.params.id);
        setNewPost(data)
    }
    useEffect(() => {
        getThePost();
    })
    return (
        <>
            <Box className={classes.container}>
                <img src={post.pic || url} alt="Blog Cover" className={classes.img} />

                <FormControl className={classes.form}>
                    <AddCircleIcon fontSize="large" color="action"/>
                    <InputBase placeholder="Title" name="title" onChange={(e)=> handleInput(e)} value={post.title}  className={classes.textField}/>
                    <Button variant="contained" onClick={updateBlog} color="primary">Update</Button>
                </FormControl>

                <TextareaAutosize
                    minRows={5}
                    placeholder="Tell me Your Story..."
                    className={classes.textArea}
                    value={post.desc}
                    onChange={(e) => handleInput(e)}
                    name="desc"
                />
            </Box>
        </>
    )
}

export default UpdateView
