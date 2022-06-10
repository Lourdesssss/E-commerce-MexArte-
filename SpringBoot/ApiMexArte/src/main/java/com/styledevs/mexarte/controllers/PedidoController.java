package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.styledevs.mexarte.entity.Pedido;
import com.styledevs.mexarte.repository.PedidoRepository;

@RestController
public class PedidoController {
		private final PedidoRepository repository;
		
		public PedidoController (PedidoRepository repository) {
			this.repository=repository;
		}
		
		@GetMapping("/pedido")
		public List<Pedido> all(){
			return repository.findAll();
		}
		
		@PostMapping("/pedido")
		Pedido nuevoRegistro(@RequestBody Pedido newPedido) {
			
			return repository.save(newPedido);
		}
	
}
