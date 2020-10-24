import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import store from './store/store'
import {Provider} from 'react-redux'
import './App.css'
import List from './component/List'
import Pie from './component/Pie'
// import edu from './assests/edu.png'
import ListCollege from './component/ListCollege'
import StudentDetails from './component/StudentDetails'

const App =()=>{
  let pic='container1'
  return(
    // <div style={{backgroundImage:`url(${edu})`}}>
    <Provider store={store}>
      <BrowserRouter >
        <div className={pic ?"container1":"container2"}>

          <div className="pt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                
                  <li className="nav-item ml-4 "><Link to="/list" >List Colleges</Link></li>
                  <li className="nav-item ml-4"><Link to="/courses">Charts By courses</Link></li>
                
              </ul>

            </nav>


          </div>
          <Switch>
            <Route path="/list" component={List} />
            <Route path="/courses" component={Pie}/>
            <Route path="/state/collegelist" component={ListCollege}/>
            <Route path="/studentdata"  component={StudentDetails}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    // </div>
  )
}
 
export default  App
// import React from 'react'
// import {Link,Route,BrowserRouter,Switch} from 'react-router-dom'
// import AppBar from '@material-ui/core/AppBar'
// import { Toolbar } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import logo from './assests/logop.jpg'
// import Button from '@material-ui/core/Button'
// import {makeStyles} from '@material-ui/styles'
// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import List from './component/List'


// function allProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`
//   };
// }
// const useStyles=makeStyles(theme=>({
  
//   logo:{
//       height:"8em",
//       // [theme.breakpoints.down("md")]:{
//       //     height:"7em"
//       // },
//       // [theme.breakpoints.down("xs")]:{
//       //     height:"5.5em"
//       // }
//   },
//   logoContainer:{
//       padding:0,
//       "&:hover":{
//           backgroundColor:"transparent"
//       }
//   }

// }))

// const App=()=>{
//   const classes =useStyles()
//   return(
//     <BrowserRouter>
//     <AppBar postion="static">
//       <Toolbar>
//       <Button  className={classes.logoContainer} disableRipple>
//                 <img alt="company logo"  className={classes.logo} src={logo}/>

//                 </Button>
//         {/* <Typography>
//           List
//         </Typography> */}

//       </Toolbar>

//     </AppBar>
//     <div>
//     <Tabs
//                 orientation="vertical"
//                 variant="scrollable"
//                 // value={value}
//                 // onChange={handleChange}
//                 className={classes.tabs}
//             >
//               <Link to="/lists">
//                 <Tab label="ListCollege" {...allProps(0)}></Tab>
//               </Link>
//               <Link to="/charts">
//                 <Tab label="Charts" {...allProps(1)}></Tab>
//               </Link>
//       </Tabs>
//     </div>
//     <Switch>
//       <Route path="/lists" component={List}/>
//     </Switch>
//     </BrowserRouter>
//   )
// }
// export default App