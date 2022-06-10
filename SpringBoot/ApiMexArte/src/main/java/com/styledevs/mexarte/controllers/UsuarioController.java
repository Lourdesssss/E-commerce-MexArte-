package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.styledevs.mexarte.entity.Usuario;
import com.styledevs.mexarte.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	public final UsuarioRepository repository;

	public UsuarioController(UsuarioRepository repository) {
		this.repository = repository;
	}
//	Obtener todos los usuarios de las Base de Datos
	@GetMapping("/usuarios")
	public List<Usuario> all(){
		return repository.findAll();
	}
	
//	Insertar nuevo Usuario en la base de datos
	@PostMapping("/usuarios")
	Usuario nuevoRegistro(@RequestBody Usuario newUsuario) {
		return repository.save(newUsuario);
	}
//	Obteener un Usuario por su Id
	@GetMapping("/usuarios/{id}")
	Usuario findUsuario(@PathVariable Long id) {
		return repository.getById(id.toString());
	}
	
//	Obtener un Usuario por su correo registrado
	@GetMapping("/usuarios-correo/{correo}")
	Usuario findUsuarioByEmail(@PathVariable String correo) {
		return repository.findUsuarioByEmail(correo);
	}
	
//Actualizamos un Usuario por su id
	/*@PutMapping("//usuarios/correo/{id}")
	Usuario replaceUsuario(
			@RequestBody Usuario newUsuario,
			@PathVariable Long id) {
		
		return repository.findAllById(id)
				.map(usuario ->{
					usuario.setnombreUsuario(newUsuario.getnombreUsuario());
					usuario.setpassword(newUsuario.getpassword());
					usuario.setcolonia(newUsuario.getcolonia());
					return repository.save(usuario);
				});
		}*/
}
