package com.example.demo.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Selen'in Next.js (3000 portu) isteklerine kapıyı açıyoruz
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // 2. Form güvenliğini (CSRF) şimdilik devredışı bırakıyoruz ki API'miz rahat çalışsın
            .csrf(csrf -> csrf.disable()) 
            
            // 3. /api/v1/auth/ ile başlayan TÜM isteklere (kayıt ol vb.) şifresiz izin veriyoruz
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll() 
                .anyRequest().authenticated()
            )
            
            // 4. İŞTE YENİ EKLENEN KISIM: Google ve GitHub ile girişi aktif ediyoruz
            .oauth2Login(oauth2 -> oauth2
                // Başarılı girişten sonra kullanıcıyı doğrudan Next.js (Ön Yüz) ana sayfasına ışınla!
                .defaultSuccessUrl("http://localhost:3000/", true)
            );
        
        return http.build();
    }

    // CORS (Çapraz Kaynak) İzin Ayarları
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // Sadece 3000 portunda çalışan frontend'e izin veriyoruz
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        // Tüm HTTP metotlarına (POST, GET, OPTIONS vb.) kapıyı açıyoruz
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}