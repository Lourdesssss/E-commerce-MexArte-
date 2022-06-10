package com.styledevs.mexarte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.styledevs.mexarte.entity.Coleccion;
import com.styledevs.mexarte.entity.Obra;

public interface ColeccionRepository extends JpaRepository<Coleccion, Long>{

}
