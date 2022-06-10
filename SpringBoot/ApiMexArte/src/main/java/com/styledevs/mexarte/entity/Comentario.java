package com.styledevs.mexarte.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class Comentario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idComentario;
	
	@Column(length =16)
	private String nombre;
	
	@Column(length =30)
	private String apellido;
	
	@Column(length =30)
	private String correo; 
	
	@Column(length =100)
	private String comentario;	

	public Comentario() {}
	public Comentario(String nombre, String comentario) {
		this.nombre = nombre;
		this.comentario = comentario;
	}
}