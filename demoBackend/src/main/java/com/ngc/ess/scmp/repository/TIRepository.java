package com.ngc.ess.scmp.repository;

import com.ngc.ess.scmp.entity.TerminalImage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
public interface TIRepository extends CrudRepository<TerminalImage, Long>{}
