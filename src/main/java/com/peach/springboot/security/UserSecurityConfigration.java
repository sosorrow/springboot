package com.peach.springboot.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class UserSecurityConfigration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity auth) throws Exception {
        auth.formLogin()
        .loginPage("/index")
        .loginProcessingUrl("/user/login")
        .and()
        .authorizeRequests()
        .antMatchers("/index", "/static/**").permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .csrf().disable();
    }
}
