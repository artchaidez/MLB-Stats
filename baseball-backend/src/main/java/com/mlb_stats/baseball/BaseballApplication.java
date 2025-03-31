package com.mlb_stats.baseball;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BaseballApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaseballApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(PlayerRepository playerRepository) {
//		return args -> {
//			PlayerModel playerModel = new PlayerModel("Juan-Soto", "New York", "Mets" );
//			playerRepository.save(playerModel);
//		};
//	}

}
