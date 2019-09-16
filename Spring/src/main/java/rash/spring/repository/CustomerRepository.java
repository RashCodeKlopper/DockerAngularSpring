package rash.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rash.spring.entity.Customer;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
  List<Customer> findByAge(int age);
}
