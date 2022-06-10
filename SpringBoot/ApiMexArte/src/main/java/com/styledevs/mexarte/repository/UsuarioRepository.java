package com.styledevs.mexarte.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.styledevs.mexarte.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{
	@Query(nativeQuery = true, value = "select * from usuario where correo = ?1")
	Usuario findUsuarioByEmail(String email);
}
