package com.styledevs.mexarte.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Pedido_items {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPedido_items;
	
	private Long idUsuario;
	
	private Long idObra;
	
	private Long idPedido;
	
	public Pedido_items() {
		
	}
	
	public Pedido_items(Long idObra, Long idPedido) {
		this.idObra = idObra;
		this.idPedido = idPedido;
	}
	
}
