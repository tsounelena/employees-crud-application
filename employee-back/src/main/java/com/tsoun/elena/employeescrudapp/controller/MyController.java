package com.tsoun.elena.employeescrudapp.controller;

import com.tsoun.elena.employeescrudapp.entity.Department;
import com.tsoun.elena.employeescrudapp.entity.Employee;
import com.tsoun.elena.employeescrudapp.service.DepartmentService;
import com.tsoun.elena.employeescrudapp.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequiredArgsConstructor
public class MyController {

    private final EmployeeService employeeService;
    private final DepartmentService departmentService;

    @GetMapping("/employees")
    public List<Employee> showAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/departments")
    public  List<Department> showAllDepartments() {return departmentService.getAllDepartments();}

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable int id) {

        Employee employee = employeeService.deleteEmployee(id);
        if (employee != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.saveEmployee(employee);

        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @PostMapping("/employees")
    public ResponseEntity<Void> createEmployee(@RequestBody Employee employee) {
        Employee createdEmployee = employeeService.saveEmployee(employee);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEmployee.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
