import {LIST_COLLEGE,LIST_COLLEGE_STATE} from './types'
import axios from 'axios'

export const listCollege=(collegeList)=>(dispatch)=>{
        // axios.get('http://localhost:3005/college/allcollege')
        // .then(res=>{
            dispatch({
                type:LIST_COLLEGE,
                payload:collegeList
            })

        // })
        // .catch(err=>{
        //     console.log(err)
        // })   
}
export const listCollegeState=(state)=>(dispatch)=>{
    axios.get(`http://localhost:3005/college/state/${state}`)
    .then(res=>{
       
        dispatch({
            type:LIST_COLLEGE_STATE,
            payload:res.data
        })
    
    })
    .catch(err=>console.log(err))
}