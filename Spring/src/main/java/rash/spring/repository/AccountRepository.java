package rash.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rash.spring.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

}
