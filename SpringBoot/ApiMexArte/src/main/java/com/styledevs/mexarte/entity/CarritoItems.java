package com.styledevs.mexarte.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class CarritoItems {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDetalleCarrito;
	
	private Long idCarrito;
	
	private Long idObra; 
	
	private Short estatus;
	

	public CarritoItems() {}
	
	
	public CarritoItems(Long idCarrito, Short estatus) {
		this.idCarrito = idCarrito;
		this.estatus = estatus;
	}
}