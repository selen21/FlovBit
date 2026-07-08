package com.example.demo.security;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        String authHeader = request.getHeader("Authorization");

        // "Bearer " ile başlayan bir bilet (Token) var mı?
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            
            // Bilet geçerli mi diye kontrol et
            if (jwtUtil.validateToken(token)) {
                
                // 1. Biletin içinden e-postayı çıkar
                String email = jwtUtil.extractEmail(token);
                
                // 2. Bu kişiye resmi bir "Güvenli Geçiş" damgası (Authentication) oluştur
                UsernamePasswordAuthenticationToken authToken = 
                        new UsernamePasswordAuthenticationToken(email, null, new ArrayList<>());
                
                // 3. Damgayı sisteme vur (Spring Security artık bu isteğe izin verecek)
                SecurityContextHolder.getContext().setAuthentication(authToken);
                
            } else {
                // Bilet geçersizse veya süresi dolmuşsa 401 Unauthorized (Yetkisiz) hatası dön
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }
        
        // Filtreden başarıyla geçenleri yoluna devam ettir
        filterChain.doFilter(request, response);
    }
}