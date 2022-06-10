package com.styledevs.mexarte.initial;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;

import com.styledevs.mexarte.entity.Obra;
import com.styledevs.mexarte.repository.ObraRepository;

public class LoadDatabase {
	private static final Logger log =
			LoggerFactory.getLogger(LoadDatabase.class);
	
	//@Bean
	CommandLineRunner initDatabase(ObraRepository repository) {
		return args->{
			log.info("Precargando "+ repository.save(new Obra("Noche Estrellada", 10000)));
			log.info("Precargando "+ repository.save(new Obra("Obra prueba", 1000)));
			
		};
	}


}
