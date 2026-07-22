package com.example.demo.controller;

import com.example.demo.entity.Project;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    // 1. Belirli bir Workspace'e ait projeleri listele
    @GetMapping("/workspace/{workspaceId}")
    public List<Project> getProjectsByWorkspace(@PathVariable Long workspaceId) {
        return projectRepository.findByWorkspaceId(workspaceId);
    }

    // 2. Yeni Proje Oluştur (Görseldeki New Project formu için)
    @PostMapping("/create")
    public ResponseEntity<?> createProject(@RequestBody Project project) {
        if (project.getProjectKey() == null || project.getProjectKey().isEmpty()) {
            // Benzersiz kısa bir key üretelim örn: "AVATA-MRWQUANEEF"
            String uniqueKey = UUID.randomUUID().toString().replace("-", "").substring(0, 10).toUpperCase();
            project.setProjectKey(uniqueKey);
        }
        Project savedProject = projectRepository.save(project);
        return ResponseEntity.ok(savedProject);
    }
}