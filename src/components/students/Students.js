import React from 'react'
import StudentsTable from './StudentsTable'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import StudentsForm from './StudentsForm';

function Students() {
    const { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={`${path}/`}>
                    <h2 style={{textAlign: "center"}}>Student List</h2>
                    <StudentsTable />
                    <Link to={`${path}/new`}><button className="button">Add new</button></Link>
                </Route>
                <Route path={`${path}/:id`} render={route => {
                    return <StudentsForm id={route.match.params.id} />
                 }}>
                 </Route>
            </Switch>
        </div>
    )
}

export default Students
