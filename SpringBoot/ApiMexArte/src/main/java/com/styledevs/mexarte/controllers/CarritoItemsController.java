package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.styledevs.mexarte.entity.CarritoItems;
import com.styledevs.mexarte.repository.CarritoItemsRepository;

@RestController
public class CarritoItemsController {
	private final CarritoItemsRepository repository;
	
	public CarritoItemsController(CarritoItemsRepository repository) {
		this.repository = repository;
	}
	
	@GetMapping("/carritositems")
	public List<CarritoItems> all(){
		return repository.findAll();
	}
	
	@PostMapping("/carritositems")
	CarritoItems nuevoRegistro(@RequestBody CarritoItems newCarritoItems) {
		return repository.save(newCarritoItems);
	}
	
	
	
}
