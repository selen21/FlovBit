package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.entity.Workspace;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WorkspaceRepository;

@RestController
@RequestMapping("/api/v1/workspaces")
@CrossOrigin(origins = "*") // Next.js'e kapıları açıyoruz
public class WorkspaceController {

    private final WorkspaceRepository workspaceRepository;
    private final UserRepository userRepository;

    @Autowired
    public WorkspaceController(WorkspaceRepository workspaceRepository, UserRepository userRepository) {
        this.workspaceRepository = workspaceRepository;
        this.userRepository = userRepository;
    }

    // Yeni Workspace Oluşturma Kapısı
    @PostMapping("/create")
    public ResponseEntity<?> createWorkspace(@RequestBody Map<String, Object> request) {
        try {
            String name = (String) request.get("name");
            // Şu an JWT token yapımız tam olmadığı için frontend'den kullanıcının email'ini de istiyoruz
            String email = (String) request.get("email"); 

            User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı!"));

            Workspace newWorkspace = new Workspace();
            newWorkspace.setName(name);
            newWorkspace.setUser(user);

            Workspace savedWorkspace = workspaceRepository.save(newWorkspace);
            return ResponseEntity.ok(savedWorkspace);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Kullanıcının Workspace'lerini Listeleme Kapısı
    @GetMapping("/user/{email}")
    public ResponseEntity<?> getUserWorkspaces(@PathVariable String email) {
        try {
            User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı!"));

            List<Workspace> workspaces = workspaceRepository.findByUserId(user.getId());
            return ResponseEntity.ok(workspaces);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}