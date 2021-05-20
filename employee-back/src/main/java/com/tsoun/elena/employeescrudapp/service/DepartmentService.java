package com.tsoun.elena.employeescrudapp.service;

import com.tsoun.elena.employeescrudapp.entity.Department;

import java.util.List;

public interface DepartmentService {
    /**
     * Get all departments.
     * @return list of {@link Department}.
     */
    List<Department> getAllDepartments();

}
