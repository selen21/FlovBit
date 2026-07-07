package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    // Belirli bir çalışma alanına (Workspace) ait tüm görevleri getir
    List<Issue> findByWorkspaceId(Long workspaceId);
    
    // Belirli bir kullanıcıya atanan tüm görevleri getir
    List<Issue> findByAssigneeId(Long assigneeId);
}