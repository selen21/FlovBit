package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(String username, String email, String rawPassword) {
        // 1. Email sistemde var mı kontrolü
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new RuntimeException("Bu e-posta adresi zaten kullanılıyor!");
        }

        // 2. Yeni kullanıcıyı oluştur (Burada şifreyi henüz hashlemedik, bir sonraki adımda Spring Security ile yapacağız)
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPasswordHash(rawPassword); // Şimdilik düz şifre kaydediyoruz
        newUser.setRole("USER");

        // 3. Veri tabanına kaydet
        return userRepository.save(newUser);
    }

    // YENİ EKLENEN GİRİŞ YAP (LOGIN) METODU
    public String login(String email, String password) {
        // 1. Kullanıcıyı e-posta adresinden bul
        User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı!"));

        // 2. Şifreyi kontrol et (Şu an düz metin kaydettiğin için equals kullanıyoruz)
        boolean isPasswordMatch = password.equals(user.getPasswordHash());

        if (!isPasswordMatch) {
            throw new RuntimeException("Hatalı şifre girdiniz!");
        }

        // 3. Her şey doğruysa başarılı mesajı dön
        return "Giriş başarılı! Hoş geldin, " + user.getUsername();
    }
}