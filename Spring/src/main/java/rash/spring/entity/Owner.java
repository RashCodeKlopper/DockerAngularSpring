package rash.spring.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity(name = "owners")
@Table(name = "owners", schema = "public")
@Data
public class Owner {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Column(name = "name")
  private String name;

  @Column(name = "date_of_birth")
  private LocalDateTime dateOfBirth;

  @NotBlank
  @Column(name = "address")
  private String address;

}
