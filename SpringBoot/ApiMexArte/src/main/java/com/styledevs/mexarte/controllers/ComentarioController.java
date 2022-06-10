package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.styledevs.mexarte.entity.Comentario;
import com.styledevs.mexarte.repository.ComentarioRepository;

@RestController
public class ComentarioController {
	private final ComentarioRepository repository;
	
	public ComentarioController(ComentarioRepository repository) {
		this.repository = repository;
	}
	
	@GetMapping("/Comentario")
	public List<Comentario> all(){
		return repository.findAll();
	}
	
	@PostMapping("/Comentario")
	Comentario nuevoRegistro(@RequestBody Comentario newComentario) {// la entrada es un JSON
		return repository.save(newComentario);
	}
}
