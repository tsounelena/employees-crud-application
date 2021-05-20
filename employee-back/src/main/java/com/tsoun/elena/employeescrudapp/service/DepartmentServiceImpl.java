package com.tsoun.elena.employeescrudapp.service;

import com.tsoun.elena.employeescrudapp.entity.Department;
import com.tsoun.elena.employeescrudapp.dao.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }
}
