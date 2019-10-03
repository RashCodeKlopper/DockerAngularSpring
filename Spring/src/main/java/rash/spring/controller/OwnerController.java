package rash.spring.controller;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rash.spring.entity.Owner;
import rash.spring.repository.OwnerRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(
        path = "/api",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@Log
public class OwnerController {

  private OwnerRepository repository;

  @Autowired
  public OwnerController(OwnerRepository ownerRepository) {
    this.repository = ownerRepository;
  }

  @GetMapping("/owners")
  public ResponseEntity<List<Owner>> getAllOwners() {
    try {
      List<Owner> owners = new ArrayList<>(repository.findAll());
      if (owners.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(owners, HttpStatus.OK);
    } catch (Exception e) {
      log.info("Exception in getAllOwners => " + e);
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/owners/{id}")
  public ResponseEntity<Owner> getOwnerById(@PathVariable("id") long id) {
    Optional<Owner> ownerData = repository.findById(id);

    /*if (ownerData.isPresent()) {
      return new ResponseEntity<>(ownerData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/

    return ownerData.map(owner -> new ResponseEntity<>(owner, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping(value = "owners/name/{name}")
  public ResponseEntity<Owner> getOwnerByName(@PathVariable String name) {
    Optional<Owner> ownerData = Optional.ofNullable(repository.findOwnerByNameEquals(name));

    return ownerData.map(owner -> new ResponseEntity<>(owner, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping(
          path = "/owners",
          consumes = MediaType.APPLICATION_JSON_VALUE
  )
  public ResponseEntity<Owner> saveOwner(@RequestBody Owner owner) {
    try {
      return new ResponseEntity<>(repository.save(owner), HttpStatus.CREATED);
    } catch (Exception e) {
      log.info("Exception in saveOwner => " + e);
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }
  public ResponseEntity<Owner> updateOwner(@PathVariable("id") long id, @RequestBody Owner owner) {
    Optional<Owner> ownerData = repository.findById(id);

    /*if (ownerData.isPresent()) {
      Customer updatedOwner = ownerData.get();
      updatedOwner.setName(owner.getName());
      updatedOwner.setDateOfBirth(owner.getDateOfBirth());
      updatedOwner.setAddress(owner.getAddress());
      return new ResponseEntity<>(repository.save(_customer), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/

    return ownerData
            .map(updatedOwner -> {
              updatedOwner.setName(owner.getName());
              updatedOwner.setDateOfBirth(owner.getDateOfBirth());
              updatedOwner.setAddress(owner.getAddress());
              return new ResponseEntity<>(repository.save(updatedOwner), HttpStatus.OK);
            })
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/owners/{id}")
  public ResponseEntity<HttpStatus> deleteOwner(@PathVariable("id") long id) {
    try {
      repository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      log.info("Exception in deleteOwner => " + e);
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

  @DeleteMapping("/owners")
  public ResponseEntity<HttpStatus> deleteAllOwners() {
    try {
      repository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      log.info("Exception in deleteAllOwners => " + e);
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }
}
