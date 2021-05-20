package com.tsoun.elena.employeescrudapp.dao;

import com.tsoun.elena.employeescrudapp.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}
