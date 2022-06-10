package com.styledevs.mexarte.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.styledevs.mexarte.entity.Pedido_items;
import com.styledevs.mexarte.repository.Pedido_itemsRepository;

@RestController
public class PedidoItemsController {
		private final Pedido_itemsRepository repository;
		
		public PedidoItemsController(Pedido_itemsRepository repository) {
			this.repository = repository;
		}
		
		@GetMapping("/pedidoItems")
		public List<Pedido_items> all(){
			return repository.findAll();
		}
		
		@PostMapping("/pedidoItems")
		Pedido_items nuevoRegistro(@RequestBody Pedido_items newPedido_items) {// la entrada es un JSON
			return repository.save(newPedido_items);
		}
}