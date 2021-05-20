import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import EmployeeDataService from '../service/EmployeeDataService';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            surname: '',
            name: '',
            middleName: '',
            position: '',
            birthday: '',
            mobilePhone: '',
            email: '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        EmployeeDataService.retrieveAllDepartments()
            .then(response => this.setState({
                departments: response.data
            }))

        if (this.state.id == -1) {
            return
        }

        EmployeeDataService.retrieveEmployee(this.state.id)
            .then(response => this.setState({
                surname: response.data.surname,
                name: response.data.name,
                middleName: response.data.middleName,
                position: response.data.position,
                birthday: response.data.birthday,
                mobilePhone: response.data.mobilePhone,
                email: response.data.email,
                department: response.department,
            }))
        
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a name'
        } else if (values.name.length < 3) {
            errors.name = 'Enter atleast 5 Characters in name'
        }

        return errors
    }

    onSubmit(values) {

        let employee = {
            id: this.state.id,
            surname:values.surname,
            name: values.name,
            middleName: values.middleName,
            position: values.position,
            birthday: values.birthday,
            mobilePhone: values.mobilePhone,
            email: values.email,
            department:values.department
        }

        if (this.state.id === -1) {
            EmployeeDataService.createEmployee(employee)
                .then(() => this.props.history.push('/employees'))
        } else {
            EmployeeDataService.updateEmployee(this.state.id, employee)
                .then(() => this.props.history.push('/employees'))
        }

        console.log(values);
    }

    render() {

        let { surname, name, id, middleName, position, birthday, mobilePhone, email } = this.state

        return (
            <div>
                <h3>Employee</h3>
                <div className="container">
                    <Formik
                        initialValues={{ surname, id, name,  middleName, position, birthday, mobilePhone, email}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>   
                                    <fieldset className="form-group">
                                        <label>Surname</label>
                                        <Field className="form-control" type="text" name="surname" />                                
                                    </fieldset>                           
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />                                
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Middle name</label>
                                        <Field className="form-control" type="text" name="middleName" />                                
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>Position</label>
                                        <Field className="form-control" type="text" name="position" />                                
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>Birthday</label>
                                        <Field className="form-control" type="text" name="birthday" />                                
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>Mobile phone</label>
                                        <Field className="form-control" type="text" name="mobilePhone" />                                
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="text" name="email" />                                
                                    </fieldset>   
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default EmployeeComponent