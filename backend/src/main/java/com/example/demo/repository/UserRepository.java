package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring Data JPA, sadece metod ismine bakarak arka planda SQL sorgusunu kendi yazar.
    // Bu sayede "SELECT * FROM users WHERE email = ?" sorgusu otomatik çalışır.
    Optional<User> findByEmail(String email);
    
    Optional<User> findByUsername(String username);
}