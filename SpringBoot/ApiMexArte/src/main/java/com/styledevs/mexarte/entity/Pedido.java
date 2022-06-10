package com.styledevs.mexarte.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Pedido {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPedido;
	
	private Long idUsuario;
	
	@Column(length =45)
	private String calle;
	@Column(length =45)
	private String ciudad;
	@Column(length =10)
	private String cp;
	@Column(length =45)
	private String entidadFederativa;
	@Column(length =13)
	private String telefono;
	private Date fechaPedido;
	private Short estatus;
	private float total;
	private float subtotal;
	
	public Pedido() {
		
	}

	public Pedido(Long idUsuario, String calle, String ciudad, String cp, String entidadFederativa, String telefono,
			Date fechaPedido, Short estatus, float total, float subtotal) {
		this.idUsuario = idUsuario;
		this.calle = calle;
		this.ciudad = ciudad;
		this.cp = cp;
		this.entidadFederativa = entidadFederativa;
		this.telefono = telefono;
		this.fechaPedido = fechaPedido;
		this.estatus = estatus;
		this.total = total;
		this.subtotal = subtotal;
	}
	
	
	
}
