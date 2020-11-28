package io.pizzeria.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MenuItemIdentifierException extends RuntimeException {

	public MenuItemIdentifierException(String message) {
		super(message);
	}

}