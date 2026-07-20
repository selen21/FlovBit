package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    // Kullanıcının bildirimlerini en yeniden en eskiye doğru (Tarihe göre) sıralayarak getirir
    List<Notification> findByUserIdOrderByCreatedAtDesc(Long userId);
}