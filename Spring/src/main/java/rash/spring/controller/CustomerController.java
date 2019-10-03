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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rash.spring.entity.Customer;
import rash.spring.repository.CustomerRepository;

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
public class CustomerController {

  @Autowired
  CustomerRepository repository;

  @GetMapping("/customers")
  public ResponseEntity<List<Customer>> getAllCustomers() {
    try {
      List<Customer> customers = new ArrayList<>(repository.findAll());
      if (customers.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(customers, HttpStatus.OK);
    } catch (Exception e) {
      log.info("Exception in getAllCustomers => " + e);
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/customers/{id}")
  public ResponseEntity<Customer> getCustomerById(@PathVariable("id") long id) {
    Optional<Customer> customerData = repository.findById(id);

    /*if (customerData.isPresent()) {
      return new ResponseEntity<>(customerData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/

    return customerData.map(customer -> new ResponseEntity<>(customer, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping(value = "customers/age/{age}")
  public ResponseEntity<List<Customer>> findByAge(@PathVariable int age) {
    try {
      List<Customer> customers = repository.findByAge(age);
      if (customers.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(customers, HttpStatus.OK);
    } catch (Exception e) {
      log.info("Exception in findByAge => " + e);
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

  @PostMapping(
          path = "/customers",
          consumes = MediaType.APPLICATION_JSON_VALUE
  )
  public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
    try {
      /*Customer newCustomer = repository.save(new Customer(customer.getName(), customer.getAge()));
      return new ResponseEntity<>(newCustomer, HttpStatus.CREATED);*/
      return new ResponseEntity<>(repository.save(customer), HttpStatus.CREATED);
    } catch (Exception e) {
      log.info("Exception in saveCustomer => " + e);
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @PutMapping(
          path = "/customers/{id}",
          consumes = MediaType.APPLICATION_JSON_VALUE
  )
  public ResponseEntity<Customer> updateCustomer(@PathVariable("id") long id, @RequestBody Customer customer) {
    Optional<Customer> customerData = repository.findById(id);

    /*if (customerData.isPresent()) {
      Customer updatedCustomer = customerData.get();
      updatedCustomer.setName(customer.getName());
      updatedCustomer.setAge(customer.getAge());
      updatedCustomer.setActive(customer.isActive());
      return new ResponseEntity<>(repository.save(_customer), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }*/

    return customerData
            .map(updatedCustomer -> {
              updatedCustomer.setName(customer.getName());
              updatedCustomer.setAge(customer.getAge());
              updatedCustomer.setActive(customer.isActive());
              return new ResponseEntity<>(repository.save(updatedCustomer), HttpStatus.OK);
            })
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping("/customers/{id}")
  public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable("id") long id) {
    try {
      repository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      log.info("Exception in deleteCustomer => " + e);
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

  @DeleteMapping("/customers")
  public ResponseEntity<HttpStatus> deleteAllCustomers() {
    try {
      repository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      log.info("Exception in deleteAllCustomers => " + e);
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }
}
