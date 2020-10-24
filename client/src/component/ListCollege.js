import React ,{ useEffect ,useState} from 'react'
import store from '../store/store'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const ListCollege=()=>{
    const [collegeDetails,setcollegeDetails]=useState([])

    useEffect(() => {

       setcollegeDetails(store.getState().college.list_college_state)
       console.log(store.getState().college.list_college_state,'in st')
    },[])

    return(
        <div>   
            {console.log(collegeDetails,'in cd')}
            <h3>Hii</h3>
            {collegeDetails?(
                collegeDetails.map(ele=>
                    <Link to="/studentdata">{ele.name}</Link>)
            ):(<div><h3>False</h3></div>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
  
    collegeDetails:state.college.list_college_state
    
});
// export default ()ListCollege
export default withRouter(connect(mapStateToProps)(ListCollege));