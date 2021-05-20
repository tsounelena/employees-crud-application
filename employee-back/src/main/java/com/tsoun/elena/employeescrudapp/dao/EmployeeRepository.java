package com.tsoun.elena.employeescrudapp.dao;

import com.tsoun.elena.employeescrudapp.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
