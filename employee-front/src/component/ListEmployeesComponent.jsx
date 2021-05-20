import FileSaver from "file-saver";
import { Component } from "react"
import EmployeeDataService from "../service/EmployeeDataService";

class ListEmployeesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees:[],
            message: null,
            data: null
        }
        
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
        this.updateEmployeeClicked = this.updateEmployeeClicked.bind(this)
        this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
    }

    componentDidMount() {
        this.refreshEmployees();
    }

    refreshEmployees() {
        EmployeeDataService.retrieveAllEmployees()
            .then(
                response => {
                    this.setState({employees: response.data})
                }
            )
    }

    deleteEmployeeClicked(id) {
        EmployeeDataService.deleteEmployee(id)
        .then(
            response => {
                this.setState({ message: `Delete of course ${id} Successful` })
                this.refreshEmployees()
            }
        )
    }

    updateEmployeeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/employees/${id}`)
    }

    addEmployeeClicked() {
        this.props.history.push(`/employees/-1`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Employees</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Surname</th>
                                <th>Name</th>
                                <th>Middle Name</th>
                                <th>Position</th>
                                <th>Birthday</th>
                                <th>Mobile Phone</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.surname}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.middleName}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.birthday}</td>
                                            <td>{employee.mobilePhone}</td>
                                            <td>{employee.email}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteEmployeeClicked(employee.id)}>Delete</button></td>
                                            <td><button className ="btn btn-success" onClick={() => this.updateEmployeeClicked(employee.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className= "row">
                    <button className="btn btn-success" onClick={this.addEmployeeClicked}>Add</button>
                </div>
            </div>
        )
    }
}

export default ListEmployeesComponent