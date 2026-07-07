package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Workspace;

public interface WorkspaceRepository extends JpaRepository<Workspace, Long> {
    // Bir kullanıcıya ait olan tüm çalışma alanlarını bulmak için özel metodumuz
    List<Workspace> findByUserId(Long userId);
}