import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {listCollege} from '../redux/actions/collogeaction'
import {withRouter} from 'react-router-dom'
import store  from '../store/store'
import {Chart} from 'react-google-charts'

const Courses=(props)=>{
    const [list,setList]=useState([])
    const [isLoaded,setisLoaded]=useState(true)
    const [update,setUpdate]=useState(false)
    const [isDataLoaded,setIsDataLoaded]=useState(false)
    const [percentArray,setPercentArray]=useState([])
    const [courseArray,setCourseArray]=useState([])
    const arr1=[]
     let courseValues=[]
     let percentValues=[]
     let ME=0
     let CSE=0
    if(isLoaded){
        props.listCollege()
    }

   useEffect(()=>{
        setisLoaded(false)
        setList(store.getState().college.item)
        console.log(list,'state')
        if(!isDataLoaded){
            cousePercent()
        }
        
    })

   const cousePercent=()=>{
        list.forEach((item)=>{
            arr1.push(...item.courses)
        })
        courseValues=[...new Set(arr1)]
        console.log(arr1,'')
        console.log(courseValues,'in set')

        for (let i=0;i<courseValues.length;i++){
            let count=0
            for(let j=0;j<arr1.length;j++){
                if(courseValues[i]==arr1[j]){
                    count=count+1
                }
                percentValues[i]=((count/10)*100)/10
            }
            console.log('course ',courseValues[i],percentValues[i])
        }
        setCourseArray(courseValues)
        setPercentArray(percentValues)
        setIsDataLoaded(true)
        console.log('p',percentValues)

        
   }
  return(
        <div>
            {isDataLoaded?(<div>
                {console.log(list,'in check')}
                {console.log(percentArray,'in return')}
            <h4>Pie {percentValues[0]}</h4>

               <Chart

width={'500px'}
height={'300px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
  ['Couses', 'Branch'],
  ['CSE', 6], 
  ['ME', 7], 
  ['CHE', 7],
  ['ECE', 6]
  
]}
options={{
  title: 'My Daily Activities',
}}/>
</div>):(null)}
    </div>
    )
}
const mapStateToProps = (state) => ({
    list:state.college.item
    });
    const mapActionToProps = {
    listCollege
    };
    
export default withRouter(connect(mapStateToProps, mapActionToProps)(Courses));