import React ,{useState,useEffect} from 'react'
import {listCollege} from '../redux/actions/collogeaction'
import {listCollegeState} from '../redux/actions/collogeaction'
import {connect} from 'react-redux'
import store from '../store/store'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Chart} from 'react-google-charts'


const List=(props)=>{
    const [isLoaded,setisLoaded]=useState(false)
    
    const [list,setList]=useState([])
    const [listState,setListState]=useState([])
    const [statesList,setStatesList]=useState([])
    let arr1=[]
    const [chartData,setChartData]=useState([])

    let Karnataka=0,AndhraPradesh=0,Jharkhand=0;
    
    
    useEffect(()=>{

        axios.get('http://localhost:3005/college/allcollege')

        .then(res=>{
            setList(res.data)
            props.listCollege(res.data)
            res.data.forEach((item)=>{
                arr1.push(item.state)    
            })
            arr1=[...new Set(arr1)]
            
            setStatesList(arr1)
            
        })
        .catch(err=>console.log(err))
        setisLoaded(true)
    },[])

    console.log(listState,'ls')

    return(
         <div>

        {!listState?<h1>yes</h1>:<h1>no</h1>}     
       
        { isLoaded  ?(<div>
        <h3>Pie Chart</h3>
        {list.forEach(ele=>{
           if(ele.state==="Karnataka"){
               {Karnataka++}
              
           }else if(ele.state==="AndhraPradesh"){
               {AndhraPradesh++}
           }else{
               {Jharkhand++}
            }
        })} 
        <Chart chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
            ["state","college"],
            ["Karnataka",Karnataka],
            ["AndhraPradesh",AndhraPradesh],
            ["Jharkhand",Jharkhand]
        ]}
        options={{
            title: 'Charts By College',
            is3D: true,
            curveType: "function",
            legend: { position: "bottom" },
            enableInteractivity: true,
            tooltip: { isHtml: true, trigger: "selection" }
          }}
        legendToggle
        chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper, google ,Chart}) => {
                const chart = chartWrapper.getChart()
                //const selection = chart.getSelection()
                const selection_get = chart.getSelection()
                const dataTable = chartWrapper.getDataTable()

                const [selectedItem] = selection_get
                const { row } = selectedItem
                const column=0

                var selection = chartWrapper.getChart().setAction({
                  id: "alertAction",
                  text: "Click for the college",
                  action: function(e) {
                    console.log(dataTable.getValue(row, column))
                    props.listCollegeState(dataTable.getValue(row, column))
                    props.history.push('/state/collegelist')
                    setListState(store.getState().college.list_college_state)
                    //setStatesList
                    
                    //alert("Stay away Corona Virus!!");
                    //console.log(Chart,'ee')
                  }
                });
                
                console.warn(selection);
                console.log(chartData,'ss')
              }

            // callback: ({ chartWrapper }) => {

            //     const chart = chartWrapper.getChart()
            //     const selection = chart.getSelection()
            //     const dataTable = chartWrapper.getDataTable()

                
               
            //     const dataTable = chartWrapper.getDataTable()
            //     if (selection.length === 1){
            //       const [selectedItem] = selection
            //       const dataTable = chartWrapper.getDataTable()
            //       const { row,column } = selectedItem

            //     //   alert(
            //     //     'You selected : ' +
            //     //       JSON.stringify({
            //     //         row,
            //     //         column,
            //     //         value: dataTable.getValue(row, column),
            //     //       }),
            //     //     null,
            //     //     2,
            //     //   )
            //     //console.log(selectedItem.row,'ss')
            //     }
                
            //     //console.log(dataTable.getValue(2,1))
            //   },

            }
        ]}
        rootProps={{ 'data-testid': '2' }}
        />
        </div>):
        (null)}

        {}
        
        </div>
    )
}

const mapStateToProps = (state) => ({
    list:state.college.item,
    listState:state.college.list_college_state
    
});

const mapActionToProps = {
    listCollege,listCollegeState
};
    
export default withRouter(connect(mapStateToProps, mapActionToProps)(List));




// import React ,{useState,useEffect} from 'react'
// import {listCollege} from '../redux/actions/collogeaction'
// import {listCollegeState} from '../redux/actions/collogeaction'
// import {connect} from 'react-redux'
// import store from '../store/store'
// import {withRouter} from 'react-router-dom'
// import {Chart} from 'react-google-charts'


// const List=(props)=>{
// const [isLoaded,setisLoaded]=useState(true)
// const [test,setTest]=useState(true)
// const [list,setList]=useState([])
// let Karnataka=0,Maharastra=0,Jharkhand=0,AndhraPradesh=0

//     if(isLoaded){
//         props.listCollege()
//     }

//     useEffect(()=>{
//     setisLoaded(false)
//     setList(store.getState().college.item)
//     console.log(list,'state')

// })
// const handleClick=(e)=>{
//     console.log('u clicked me')
// }

// return(
//     <div>
//        { list  ?(<div>
//            <h3>Pie Chart</h3>
//             {list.forEach(ele=>{
//                if(ele.state==="Karnataka"){
//                    {Karnataka++}
                  
//                }else if(ele.state==="Jharkhand"){
//                    {Jharkhand++}
//                }else {
//                    {AndhraPradesh++}
//                 }
//             })}
//             <Chart chartType="PieChart"
//                 onClick={handleClick}
//              loader={<div>Loading Chart</div>}
//             data={[
//                 ["state","college"],
//                 ["Karnataka",Karnataka],
//                 ["AndhraPradesh",AndhraPradesh],
//                 // ["Rajasthan",Jharkand],
//                 ["Jharkhand",Jharkhand]
//             ]}
//             options={{
//                 title: 'Charts By College',
//                 is3D: true,
//               }}
//               rootProps={{ 'data-testid': '2' }}/>
//             </div>):
//             (null)}</div>
           
// )
// }
// const mapStateToProps = (state) => ({
// list:state.college.item
// });
// const mapActionToProps = {
// listCollege
// };

// export default withRouter(connect(mapStateToProps, mapActionToProps)(List));


// import React ,{useState,useEffect} from 'react'
// import {listCollege} from '../redux/actions/collogeaction'
// import {connect} from 'react-redux'
// import store from '../store/store'
// import {withRouter} from 'react-router-dom'
// import axios from 'axios'
// import {Chart} from 'react-google-charts'


// const List=(props)=>{
//     const [isLoaded,setisLoaded]=useState(false)
//     const [test,setTest]=useState(true)
//     const [list,setList]=useState([])

//     let Karnataka=0,Maharastra=0,Rajasthan=0;
    
//     useEffect(()=>{

//         props.listCollege()
//         // axios.get('http://localhost:3005/college/allcollege')

//         // .then(res=>{
//         //     setList(res.data)
//         //     props.listCollege(res.data)
//         //     console.log(res.data,' in list')
//         // })
//         // .catch(err=>console.log(err))
        
//         // setisLoaded(true)
    
//     },[])
//     return(
//          <div>
       
//         { isLoaded  ?(<div>
//         <h3>Pie Chart</h3>
//         {list.forEach(ele=>{
//            if(ele.state==="Karnataka"){
//                {Karnataka++}
              
//            }else if(ele.state=="Rajasthan"){
//                {Rajasthan++}
//            }else{
//                {Maharastra++}
//             }
//         })}
//         <Chart chartType="PieChart"
//          loader={<div>Loading Chart</div>}
//         data={[
//             ["state","college"],
//             ["Karnataka",Karnataka],
//             ["Maharastra",Maharastra],
//             ["Rajasthan",Rajasthan]
//         ]}
//         options={{
//             title: 'Charts By College',
//             is3D: true,
//           }}
//           rootProps={{ 'data-testid': '2' }}/>
//         </div>):
//         (null)}</div>
//     )
// }
// const mapStateToProps = (state) => ({
//     list:state.college.item
//     });
//     const mapActionToProps = {
//     listCollege
//     };
    
//     export default withRouter(connect(mapStateToProps, mapActionToProps)(List));