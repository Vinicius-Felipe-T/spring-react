package com.devsuperior.springreact.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.springreact.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}