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
   variant = 'outlined'
   color  = 'secondary'
 classes = {{ul : classes.ul}}
 renderItem={
    (item)=>(
        <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
    />
  )
}

export default Paginate