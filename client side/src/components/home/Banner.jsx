import { Box ,makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    image : {
        //background: 'url(../../images/bannerImage.jpg)',
        background: `url(${'https://images.unsplash.com/photo-1585229259079-05ab82f93c7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCUyM2NvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}) center/55% repeat-x #000`,
        width : '100%',
        height : '50vh',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        '& :first-child' :{
            fontSize : '70px',
            color : '#FFFFFF',
        },
        '& :last-child': {
            fontSize: '20px',
            color: '#FFFFFF',
        }
    }
}))
const Banner = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Code For Interview</Typography>
            </Box>
        </>
    )
}

export default Banner
