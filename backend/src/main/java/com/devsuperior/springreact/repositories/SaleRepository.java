package com.devsuperior.springreact.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.springreact.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}