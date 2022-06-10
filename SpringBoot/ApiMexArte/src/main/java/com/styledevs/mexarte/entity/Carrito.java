package com.styledevs.mexarte.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Carrito {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCarrito;
	
	private float total;
	
	private String idUsuario;
	
	private short estatus;
	
	public Carrito() {
		
	}
	
	public Carrito(float total, short estatus) {
		this.total = total;
		this.estatus = estatus;
	}
	
	
}
