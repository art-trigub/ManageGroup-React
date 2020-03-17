import React from 'react'
import GroupList from './GroupList';
import {Switch, useRouteMatch, Route, Link} from 'react-router-dom'
import GroupForm from './GroupForm';

function Group() {
    const {path} = useRouteMatch()
    return (
        <div className='group-main'>
            <Switch>   
                <Route exact path={`${path}/`}>
                    <h2 style={{textAlign: "center"}}>Group List</h2>
                    <GroupList />
                    <Link to={`${path}/new`}>
                        <button className='button'>Add new</button>
                    </Link>
                </Route>
                <Route path={`${path}/:id`} render={route => {
                    return <GroupForm id={route.match.params.id} />
                }}>
                </Route>
            </Switch>
        </div>
    )
}

export default Group
