package io.pizzeria.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	/**
	 * Take MenuItemIdentifierException object and return response along with Http
	 * status via the MenuItemIdentifierExceptionResponse class
	 * 
	 * @param ex
	 * @param request
	 * @return ResponseEntity
	 */
	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectIdException(MenuItemIdentifierException ex, WebRequest request) {
		MenuItemIdentifierExceptionResponse exceptionResponse = new MenuItemIdentifierExceptionResponse(
				ex.getMessage());
		return new ResponseEntity<Object>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}

}
