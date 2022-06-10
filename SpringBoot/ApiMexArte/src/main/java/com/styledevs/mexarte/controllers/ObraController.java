package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.styledevs.mexarte.entity.Obra;
import com.styledevs.mexarte.repository.ObraRepository;

@RestController
public class ObraController {
		private final ObraRepository repository;
		
		public ObraController(ObraRepository repository) {
			this.repository = repository;
		}
		
		@GetMapping("/obras")
		public List<Obra> all(){
			return repository.findAll();
		}
		
		@PostMapping("/obras")
		Obra nuevoRegistro(@RequestBody Obra newObra) {// la entrada es un JSON
			return repository.save(newObra);
		}
}
