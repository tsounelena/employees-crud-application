import axios from 'axios'

const EMPLOYEES_API_URL = 'http://localhost:8080'

class EmployeeDataService {

    retrieveAllEmployees() {
        console.log('executed service all')
        return axios.get(`${EMPLOYEES_API_URL}/employees`);
    }

    retrieveAllDepartments() {
        return axios.get(`${EMPLOYEES_API_URL}/departments`)
    }

    deleteEmployee(id) {
        console.log('executed service')
        return axios.delete(`${EMPLOYEES_API_URL}/employees/${id}`);
    }

    retrieveEmployee(id) {
        console.log('executed service 1 ')
        return axios.get(`${EMPLOYEES_API_URL}/employees/${id}`);
    }

    updateEmployee(id, employee) {
        return axios.put(`${EMPLOYEES_API_URL}/employees/${id}`, employee);
    }

    createEmployee(employee) {
        return axios.post(`${EMPLOYEES_API_URL}/employees/`, employee);
    }
}

export default new EmployeeDataService()