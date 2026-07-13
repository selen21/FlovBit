package com.example.demo.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.security.JwtFilter;
import com.example.demo.security.OAuth2SuccessHandler; // YENİ: Başarılı giriş yakalayıcıyı import ettik

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Güvenlik görevlimizi (Bilet kontrolcüsü) içeri alıyoruz
    @Autowired
    private JwtFilter jwtFilter; 

    // YENİ: Google/GitHub başarılı giriş yöneticimizi içeri alıyoruz
    @Autowired
    private OAuth2SuccessHandler oAuth2SuccessHandler; 

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Selen'in Next.js (3000 portu) isteklerine kapıyı açıyoruz
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // 2. Form güvenliğini (CSRF) şimdilik devredışı bırakıyoruz ki API'miz rahat çalışsın
            .csrf(csrf -> csrf.disable()) 
            
            // 3. İzinler ve Kapılar
            .authorizeHttpRequests(auth -> auth
                // Tarayıcının ön kontrol (OPTIONS) isteklerine biletsiz izin ver (O meşhur hatanın çözümü!)
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() 
                
                // /api/v1/auth/ ile başlayan TÜM isteklere (kayıt ol vb.) şifresiz izin veriyoruz
                .requestMatchers("/api/v1/auth/**").permitAll() 
                
                // Geri kalan HER ŞEY için bilet şart!
                .anyRequest().authenticated()
            )
            
            // Bilet kontrolcümüzü (JwtFilter) resmi olarak sisteme dahil ediyoruz
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)

            // 4. İŞTE GÜNCELLENEN KISIM: Google ve GitHub ile girişi aktif ediyoruz
            .oauth2Login(oauth2 -> oauth2
                // YENİ: Sabit bir URL yerine, bizim yazdığımız özel sınıfı kullan diyoruz
                .successHandler(oAuth2SuccessHandler)
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
        configuration.setAllowedHeaders(Arrays.asList("*")); // authorization header'ı için * önemli
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}