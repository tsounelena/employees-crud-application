package com.tsoun.elena.employeescrudapp.service;

import com.tsoun.elena.employeescrudapp.entity.Employee;
import com.tsoun.elena.employeescrudapp.dao.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //TODO
    @Override
    public Employee deleteEmployee(Integer id) {
        return Optional.ofNullable(this.getEmployeeById(id))
                .map(employee -> {
                    employeeRepository.deleteById(employee.getId());
                    return employee;
                })
                .orElse(null);

    }

    @Override
    public Employee saveEmployee(Employee employee) {
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public Employee getEmployeeById(Integer id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.orElse(null);
    }
}
