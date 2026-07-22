package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String projectKey; // Örn: "AYPRO" gibi kısa kodlar için

    private Long workspaceId; // Hangi çalışma alanına ait
}