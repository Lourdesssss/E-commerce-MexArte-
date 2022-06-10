package com.styledevs.mexarte.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Obra {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idObra;
	
	@Column(length =45)
	private String nombre;
	
	private float precio;
	
	@Column(length =10000)
	private String imagen;
	
	@Column(length =5000)
	private String descripcion;
	
	private Long idUsuario;
	
	@Column(length =100)
	private String tamanio;
	
	private Short estatus;
	
	private Long idColeccion;

	public Obra() {
	}

	public Obra(String nombre, float precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
	
	
}
