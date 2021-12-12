import React from 'react'
import {AppBar ,makeStyles,Toolbar, Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    compo : {
        backgroundColor : '#FFFFFF',
        color : 'black'
    },
    container : {
        justifyContent :'center',
        '& > *' : {
            padding : '20px'
        }
    },
    link : {
        textDecoration : 'none',
        color : 'inherit'
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar className={classes.compo}>
                <Toolbar className={classes.container}>
                    <Typography Typography component = { NavLink} to = "/"  className={classes.link}>
                        Home
                    </Typography>
                    <Typography  component={NavLink} to="/" className={classes.link}>
                        About
                    </Typography>
                    <Typography  component={NavLink} to="/" className={classes.link}>
                        Contact
                    </Typography>
                    <Typography  component={NavLink} to="/" className={classes.link}>
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
