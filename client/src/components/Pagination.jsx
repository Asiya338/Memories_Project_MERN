<<<<<<< HEAD
import React , {useEffect} from 'react'
import {Pagination , PaginationItem } from '@material-ui/lab'
import {Link} from 'react-router-dom'
import useStyles from './styles.js';
import {getPosts} from '../actions/posts.js'
import {useDispatch , useSelector} from 'react-redux'


const Paginate = ({page}) => {
    const classes = useStyles()
   const {numberOfPages} =  useSelector((state)=>state.posts)
 const dispatch = useDispatch()
 useEffect(()=>{
   if (page) {
   console.log('page' , page)
   dispatch(getPosts(page))
   }
 } , [page])
  return (
    <Pagination
   count = {numberOfPages}
     page={Number(page) || 1}
=======
import React from 'react'
import {Pagination , PaginationItem } from '@material-ui/lab'
import {Link} from 'react-router-dom'
import useStyles from './styles.js';

const Paginate = ({page}) => {
    const classes = useStyles()
  return (
    <Pagination
   count = {5}
   page = {1}
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
   variant = 'outlined'
   color  = 'secondary'
 classes = {{ul : classes.ul}}
 renderItem={
    (item)=>(
<<<<<<< HEAD
        <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`} />
=======
        <PaginationItem  {...item} component={Link} to={`/posts?page=${page}`} />
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
            )}
    />
  )
}

export default Paginate