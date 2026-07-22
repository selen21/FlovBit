package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "cycles")
public class Cycle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // Örn: "Sprint 12"
    private String goal; // Cycle hedefi
    
    private LocalDate startDate;
    private LocalDate endDate;
    
    private String status; // PLANNING, ACTIVE, COMPLETED

    private Long projectId; // Hangi projeye ait
}