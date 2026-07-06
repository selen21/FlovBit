package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

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