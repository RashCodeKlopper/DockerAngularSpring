package rash.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rash.spring.entity.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

  Owner findOwnerByNameEquals(String name);

}
