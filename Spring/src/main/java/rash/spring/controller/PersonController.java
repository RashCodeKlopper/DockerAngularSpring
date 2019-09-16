package rash.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import rash.spring.repository.PersonRepository;
import rash.spring.entity.Person;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    PersonRepository personRepository;

/*    @RequestMapping(
            method = RequestMethod.GET,
            path = "api/persons",
            produces = MediaType.APPLICATION_JSON_VALUE
    )*/
    @GetMapping(
            path = "persons",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

/*    @RequestMapping(
            method = RequestMethod.POST,
            path = "api/persons",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )*/
    @PostMapping(
            path = "persons",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public Person addPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

}
