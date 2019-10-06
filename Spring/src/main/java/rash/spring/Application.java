package rash.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import rash.spring.entity.Account;
import rash.spring.entity.Owner;
import rash.spring.repository.OwnerRepository;

import java.time.LocalDateTime;

@SpringBootApplication
public class Application implements CommandLineRunner {

    private OwnerRepository repository;

    @Autowired
    public Application(OwnerRepository ownerRepository) {
        this.repository = ownerRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {

        // Create an Owner
        Owner owner = new Owner();

        owner.setName("Rashied From Spring Boot Test");
        owner.setDateOfBirth(LocalDateTime.now());
        owner.setAddress("Spring Boot Adres Test");

        // Create Accounts
        Account account1 = new Account();
        account1.setOwner(owner);
        account1.setCreationDate(LocalDateTime.now());
        account1.setAccountType("Domestic");

        Account account2 = new Account();
        account2.setOwner(owner);
        account2.setCreationDate(LocalDateTime.now());
        account2.setAccountType("Savings");

        Account account3 = new Account();
        account3.setOwner(owner);
        account3.setCreationDate(LocalDateTime.now());
        account3.setAccountType("Foreign");

        // Add Accounts in the Post
        owner.getAccounts().add(account1);
        owner.getAccounts().add(account2);
        owner.getAccounts().add(account3);

        // Save Owner and Accounts via the Owner entity
        repository.save(owner);
    }
}

