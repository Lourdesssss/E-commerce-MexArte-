package com.styledevs.mexarte.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Usuario {

	@Id
	@Column(length =45)
	private String correo;
//	private Long idUsuario;
	
	@Column(length =15)
	private String nombreUsuario;
	
	@Column(length =20)
	private String password;
	
//	@Column(length =45)
//	private String correo;
		
	@Column(length =20)
	private String nombre;
	
	@Column(length =15)
	private String apellidoPat;
	
	@Column(length =15)
	private String apellidoMat;
	
	@Column(length =20)
	private String calle;
	
	@Column(length =20)
	private String colonia;
	
	
	private Integer cp;
	
	@Column(length =10)
	private String numCasa;
	
	@Column(length =30)
	private String ciudad;
	
	@Column(length =12)
	private String telefono;
	
	private short artista;
	
	
	private short coleccionista;
	
	
	public Usuario() {
		/*
		private Long id;
		private String password;
		private String colonia;
		
		@OneToOne(cascade = CascadeType.ALL)
		private Password pasword;
		
		OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
		private List<Proyecto>proyectos;
		
		public Usuario() {*/
			
		}
/*		
		public Usuario (String nombreUsuario, String password)
					this.nombreUsuario = nombreUsuario;
					this.password = pasword;
		
	}*/
	
	public Usuario(String nombreUsuario, String password, String colonia) {
		this.nombreUsuario = nombreUsuario;
		this.password = password;
		this.colonia = colonia;
	}
}
