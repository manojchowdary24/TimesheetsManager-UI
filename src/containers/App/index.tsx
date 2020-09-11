import React from "react";
import { FcBusinessman } from "react-icons/fc";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import Dashboard from '../Dashboard';
import Add from '../Add';
import Edit from '../Edit';
import View from '../View';
import Settings from '../Settings';



const toolbar: React.CSSProperties = {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      background: "#3f51bf",
      height: "90px"
  };

  const toolbar_navigation: React.CSSProperties = {
      display: "flex",
      height: "100%",
      alignItems: "center",
      padding: "0 1rem"
  };

  const toolbar_logo: React.CSSProperties = {
    color: "white", textDecoration: "none", top: "30px" 
  };
  
  const spacer: React.CSSProperties = {
     flex: "1", textAlign: "center", color: "white" 
  };

  const toolbar_navigation_items: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "0.5rem"
  }

  const toolbar_navigation_itemsp: React.CSSProperties = {
      color: "white",
      textDecoration: "none",
      listStyle: "none",
      display: "flex",
      paddingBottom:"10px"
  };

  const man_icon: React.CSSProperties = {
    listStyle: "none",
    display: "block",
    paddingLeft: "22px",
    alignItems: "center",
    height: "30px",
    paddingRight: "2px"
  };

  const button_man_icon: React.CSSProperties = {
    top: "25px",
    right: "20px",
    borderRadius: "2rem",
    cursor: "pointer",
    outline: "none",
  };

    const button_logout: React.CSSProperties = {
      paddingLeft: "20px",
      paddingTop: "8px",
      height: "5px"
    };

    const button_logout1: React.CSSProperties = {
      backgroundColor: "#3f51bf",
      border: "none",
      color: "white",
      padding: "7px",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "11px",
      margin: "4px 2px",
      cursor: "pointer",
      borderRadius: "1rem",
      outline: "none"
    };





    const sidebar: React.CSSProperties = {
      height: "100%",
      width: "65px",
      position: "fixed",
      top: "0",
      left: "0",
      backgroundColor: "#3f51bf",
      transition: "0.4s",
      overflowX: "hidden",
      paddingTop: "100px",
      whiteSpace: "nowrap"
    };
    const sidebara: React.CSSProperties = {
      padding: "8px 8px 8px 20px",
      textDecoration: "none",
      fontSize: "25px",
      color: "white",
      display: "block"
    };
    const icons: React.CSSProperties = {
      verticalAlign: "middle",
      marginRight: "23px"
    };
    const icontext: React.CSSProperties = {
      verticalAlign: "middle"
    };


    
interface Props {
  signOut: () => void;
  
}

 function mousehover(e: any) {
    e.target.style.fontSize= '26px'
 }

 function mouseout(e: any) {
  e.target.style.fontSize= '25px'
}

function displaybutton() {
  var x = document.getElementById("demo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.color= "white";
  }
}

function testIn() {
  console.log("hovering in sidebar");
  document.getElementById("mySidebar").style.width = "200px";
}

function testOut() {
  console.log("hovering outside sidebar");
  document.getElementById("mySidebar").style.width = "65px";
}
  
const App: React.FC<Props> = (
  { signOut }) => {
  return (
        <div>
         
            <header style={toolbar}>
                <nav style={toolbar_navigation}>
                    <div style={toolbar_logo}></div>
                    <div style={spacer}><h1>TIMESHEETS MANAGER</h1></div>
                    <div style={toolbar_navigation_items}>
                        <a style={toolbar_navigation_itemsp}><p>Welcome username</p></a>
                        <a>
                          <div style={man_icon}>
                            <button style={button_man_icon} onClick={displaybutton}><FcBusinessman size="2rem"></FcBusinessman></button>
                          </div>
                          <div style={button_logout}>
                            <button id="demo" style={button_logout1} hidden>Logout</button>
                          </div>
                        </a> 
                    </div>
                </nav>
                </header>
                <nav>
                  <Router>
                    <div id="mySidebar" style={sidebar} onMouseOverCapture={testIn} onMouseOutCapture={testOut}>
                      <Link to="/welcome" style={sidebara} onMouseOverCapture={mousehover} onMouseOutCapture={mouseout}><DashboardRoundedIcon style={icons}></DashboardRoundedIcon><span style={icontext}>Dashboard</span></Link><br></br>
                      <Link to="/add" style={sidebara} onMouseOverCapture={mousehover} onMouseOutCapture={mouseout}><AddCircleIcon style={icons}></AddCircleIcon><span style={icontext}>Add</span></Link><br></br>
                      <Link to="/edit" style={sidebara} onMouseOverCapture={mousehover} onMouseOutCapture={mouseout}><EditIcon style={icons}></EditIcon><span style={icontext}>Edit</span></Link><br></br>
                      <Link to="/view" style={sidebara} onMouseOverCapture={mousehover} onMouseOutCapture={mouseout}><VisibilityIcon style={icons}></VisibilityIcon><span style={icontext}>View</span></Link><br></br>
                      <Link to="/settings" style={sidebara} onMouseOverCapture={mousehover} onMouseOutCapture={mouseout}><SettingsInputComponentIcon style={icons}></SettingsInputComponentIcon><span style={icontext}>Settings</span></Link><br></br>
                    </div>
                    <Switch>
                      <Route path = "/welcome" component={Dashboard}/>
                      <Route path = "/add" component={Add}/>
                      <Route path = "/edit" component={Edit}/>
                      <Route path = "/view" component={View}/>
                      <Route path = "/settings" component={Settings}/>
                    </Switch>
                  </Router>
                </nav>
            </div> 
             
            );
};

export default App;
