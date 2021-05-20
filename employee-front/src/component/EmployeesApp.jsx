import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeComponent from './EmployeeComponent';
import ListEmployeesComponent from './ListEmployeesComponent';

class EmployeesApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Employee Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListEmployeesComponent} />
                        <Route path="/employees" exact component={ListEmployeesComponent} />
                        <Route path="/employees/:id" component={EmployeeComponent} />
                    </Switch> 
                </>
            </Router>
        )
    }
}

export default EmployeesApp