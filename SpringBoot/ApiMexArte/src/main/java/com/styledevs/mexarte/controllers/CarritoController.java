package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.styledevs.mexarte.entity.Carrito;
import com.styledevs.mexarte.repository.CarritoRepository;

@RestController
public class CarritoController {
	private final CarritoRepository repository;
	
	public CarritoController(CarritoRepository repository) {
		this.repository = repository;
		
	}
	
	//Trae todos los carritos.
	@GetMapping("/carritos")
	public List<Carrito> all(){
		return repository.findAll();
	}
	
	
	@PostMapping("/carritos")
	Carrito nuevoRegistro(@RequestBody Carrito newCarrito) {
		return repository.save(newCarrito);
	}
}
