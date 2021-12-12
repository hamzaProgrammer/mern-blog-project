import { Button , makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import React from 'react'
import {categories} from '../../constants/Data'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    create : {
        margin: '20px',
        backgroundColor : '#6495ED',
        color : '#fff'
    },
    table : {
        border : '1px solid rgba(224 , 224 , 224 , 1)'
    }
}))
const Categories = () => {
    const classes = useStyles()
    return (
        <>
            <NavLink to="/create" style={{textDecoration : 'none' , color : '#878787'}}>
                <Button variant="contained" className={classes.create}>
                    Create Blog
                </Button>
            </NavLink>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <NavLink to = {`/`}style = {{textDecoration: 'none',color: 'inherit'}} >
                            <TableCell>All Categories</TableCell>
                        </NavLink>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                            <NavLink to={`/?categories=${category}`}>
                                <TableCell>{category}</TableCell>
                            </NavLink>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories
