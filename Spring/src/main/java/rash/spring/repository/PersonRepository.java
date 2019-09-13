package rash.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rash.spring.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Integer> {



}
