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

import com.example.demo.entity.Issue;
import com.example.demo.entity.Workspace;
import com.example.demo.repository.IssueRepository;
import com.example.demo.repository.WorkspaceRepository;

@RestController
@RequestMapping("/api/v1/issues")
@CrossOrigin(origins = "*") // Next.js'e izin veriyoruz
public class IssueController {

    private final IssueRepository issueRepository;
    private final WorkspaceRepository workspaceRepository;

    @Autowired
    public IssueController(IssueRepository issueRepository, WorkspaceRepository workspaceRepository) {
        this.issueRepository = issueRepository;
        this.workspaceRepository = workspaceRepository;
    }

    // Yeni Görev (Issue) Ekleme
    @PostMapping("/create")
    public ResponseEntity<?> createIssue(@RequestBody Map<String, Object> request) {
        try {
            String title = (String) request.get("title");
            String status = request.containsKey("status") ? (String) request.get("status") : "To Do";
            String priority = request.containsKey("priority") ? (String) request.get("priority") : "Low";
            
            // Hangi çalışma alanına ekleneceğini ID ile buluyoruz
            Long workspaceId = Long.valueOf(request.get("workspaceId").toString());

            Workspace workspace = workspaceRepository.findById(workspaceId)
                .orElseThrow(() -> new RuntimeException("Çalışma alanı bulunamadı!"));

            Issue newIssue = new Issue();
            newIssue.setTitle(title);
            newIssue.setStatus(status);
            newIssue.setPriority(priority);
            newIssue.setWorkspace(workspace);

            Issue savedIssue = issueRepository.save(newIssue);
            return ResponseEntity.ok(savedIssue);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Bir Çalışma Alanındaki Tüm Görevleri Listeleme
    @GetMapping("/workspace/{workspaceId}")
    public ResponseEntity<?> getWorkspaceIssues(@PathVariable Long workspaceId) {
        try {
            List<Issue> issues = issueRepository.findByWorkspaceId(workspaceId);
            return ResponseEntity.ok(issues);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}