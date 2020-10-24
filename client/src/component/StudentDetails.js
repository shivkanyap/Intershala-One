import React, {useState,useEffect} from 'react'
import store from '../store/store'
import axios from 'axios'


const StudentDetails=(props)=>{
    const id=props.match.params.id
    const [information,setInformation]=useState([])
    console.log(id,'in frontend')
    useEffect(()=>{
        // axios.get(`http://localhost:3005/college/${id}`)
    })
    return(
        <div>
           <h4>Kanya</h4>
        </div>
    )
}
export default StudentDetails