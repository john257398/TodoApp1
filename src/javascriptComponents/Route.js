import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Inbox  from './Inbox'
import Register from './Register'
import Login from './Login'
import Preview from './Preview'
import addedTodo from './addedTodo'
import editTodo from './editTodo'

const Navigator= () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/inbox' component={Inbox} />
                <Route path='/preview' component={Preview} />
                <Route path='/addedtodo' component={addedTodo} />
                <Route path='/edittodo' component={editTodo} />
            </Switch>
        </Router>
    )
}

export default Navigator