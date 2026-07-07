package com.example.demo.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.AuthService;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*") // Selen'in Next.js uygulamasından (farklı bir porttan) gelecek isteklere izin ver
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        try {
            // Frontend'den gelen JSON verisini parçala
            String username = request.get("username");
            String email = request.get("email");
            String password = request.get("password");

            // Kendi kurduğumuz mantıkla servise ilet
            User newUser = authService.registerUser(username, email, password);
            
            // Başarılı olursa 200 OK ile oluşturulan kullanıcıyı dön
            return ResponseEntity.ok(newUser);
            
        } catch (RuntimeException e) {
            // Eğer email zaten varsa, servisimizden gelen hatayı 400 Bad Request olarak Selen'e ilet
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // YENİ EKLENEN GİRİŞ YAP (LOGIN) UÇ NOKTASI
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            String password = request.get("password");
            
            // AuthService'deki login metodumuzu çağırıyoruz
            String resultMessage = authService.login(email, password);
            
            // Başarılı olursa 200 OK ve mesajı JSON formatında dönüyoruz
            return ResponseEntity.ok(Collections.singletonMap("message", resultMessage));
        } catch (RuntimeException e) {
            // Hata olursa 400 Bad Request ve hata mesajını JSON olarak dönüyoruz
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", e.getMessage()));
        }
    }
}