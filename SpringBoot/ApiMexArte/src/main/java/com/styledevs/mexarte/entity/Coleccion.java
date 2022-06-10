package com.styledevs.mexarte.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Coleccion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idColeccion;
	
	@Column(length =45)
	private String coleccion;
	
	@Column(length =250)
	private String descripcion;
	
	public Coleccion() {}
	
	public Coleccion(String coleccion, String descripcion) {
		this.coleccion=coleccion;
		this.descripcion=descripcion;
	}

}
