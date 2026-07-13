package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Profil İsmi Güncelleme
    @PostMapping("/update-profile")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newName = request.get("name");

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı!"));

        user.setUsername(newName);
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Profil başarıyla güncellendi."));
    }

    // Şifre Değiştirme
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String currentPassword = request.get("currentPassword");
        String newPassword = request.get("newPassword");

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı!"));

        // Mevcut şifre kontrolü
        if (!passwordEncoder.matches(currentPassword, user.getPasswordHash())) {
            return ResponseEntity.badRequest().body("Mevcut şifre yanlış!");
        }

        // Yeni şifreyi hashleyerek kaydet
        user.setPasswordHash(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Şifre başarıyla değiştirildi."));
    }
}