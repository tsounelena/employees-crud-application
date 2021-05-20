package com.tsoun.elena.employeescrudapp.service;

import com.tsoun.elena.employeescrudapp.entity.Employee;

import java.util.List;

public interface EmployeeService {

    /**
     * Get all employees.
     * @return list of {@link Employee}.
     */
    List<Employee> getAllEmployees();

    /**
     * Delete employee.
     * @param id of employee.
     */
    Employee deleteEmployee(Integer id);

    /**
     * Save employee.
     * @param employee {@link Employee}
     */
    Employee saveEmployee(Employee employee);

    /**
     * Get employee by id.
     * @param id of employee.
     * @return {@link Employee}
     */
    Employee getEmployeeById(Integer id);

}
