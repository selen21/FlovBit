package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "workspaces")
public class Workspace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    // BİR Workspace, BİR User'a aittir (Many-to-One ilişkisi)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore // Sonsuz döngüye girmemesi için JSON çevirisinde kullanıcıyı gizliyoruz
    private User user;

    // BİR Workspace'in BİRDEN FAZLA Görevi (Issue) olabilir
    @OneToMany(mappedBy = "workspace", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Issue> issues = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    // --- Getter ve Setter Metotları ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public List<Issue> getIssues() { return issues; }
    public void setIssues(List<Issue> issues) { this.issues = issues; }
}