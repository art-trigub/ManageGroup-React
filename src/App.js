import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Group from './components/group/Group';
import Students from './components/students/Students';

export default function App() {
  return (
    <Router>
      <div className="main__container">
        <h1 className='header'style={{textAlign: "center"}}>Group Management</h1>
        <div style={{textAlign: "center", fontSize: "20px"}}>
          <Link to="/group"><span>Group</span></Link>
          <Link to="/students"><span style={{marginLeft: "20px"}}>Students</span></Link>
        </div>
      </div>
      <Switch>
        <Route path="/group">
          <Group />
         </Route>
         <Route path="/students">
           <Students />
        </Route>
      </Switch>
    </Router>
  )
}
