import React , {useState , useEffect} from 'react'
import { Box  , Button, FormControl,  InputBase, makeStyles, TextareaAutosize} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {createPost ,uploadFile} from '../../service/api'
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
    title : '',
    desc :'',
    pic : '',
    username : 'coddforInterview',
    categories : 'all',
    createDate : new Date()
}
const CreateView = () => {
    const history = useHistory();
    const classes = useStyles();
    const url = "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fCUyM2NvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

    const [post , setPost] = useState(iniValues); // for pushing data
    const [file, setFile] = useState('')
    // setting changed data
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({...post, [name]:value})
    }

    // sending data to axios
    const savePost = async () => {
        const res = await createPost(post)
        if(res){
            window.alert("SuccessFully Added New Blog");
            setPost({})
            history.push("/");
        }else{
            window.alert("Error!  Blog NOT SuccessFully Added")
        }
    }

    const getImage = async () => {
        if(file){
            const data = new FormData();
            data.append("name", file.name)
            data.append("file", file)

            await uploadFile(data)
        }
    }
    useEffect(() => {
        getImage();
    }, [file])

    return (
        <>
            <Box className={classes.container}>
                <img src={url} alt="Blog Cover" className={classes.img} />

                <FormControl className={classes.form}>
                    <label htmlFor="fileInput">
                        <AddCircleIcon fontSize="large" color="action"/>
                    </label>
                    <input type="file" id="fileInput" name="file" style={{display : 'none'}}  onChange={(e) => setFile(e.target.file[0])} />
                    <InputBase name="title" onChange={handleChange} placeholder="Title" className={classes.textField}/>
                    <Button variant="contained" onClick={savePost} color="primary">Publish</Button>
                </FormControl>

                <TextareaAutosize
                    minRows={5}
                    placeholder="Tell me Your Story..."
                    className={classes.textArea}
                    onChange={handleChange}
                    name="desc"
                />
            </Box>
        </>
    )
}

export default CreateView
