package io.pizzeria.web;

import static io.pizzeria.services.MapValidationErrorService.mapValidation;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.pizzeria.domain.MenuItem;
import io.pizzeria.services.MenuItemService;

@RestController
@RequestMapping("/api/menu")
public class MenuItemController {

	@Autowired
	private MenuItemService menuItemService;

	/**
	 * A controller for handling #createNewMenuItem requests. This controller will
	 * check request for errors then invoke the #saveOrUpdate service.
	 * 
	 * @param menuItem
	 * @param result
	 * @return ResponseEntity
	 */
	@PostMapping("")
	public ResponseEntity<?> createNewMenuItem(@Valid @RequestBody MenuItem menuItem, BindingResult result) {

		ResponseEntity<?> errorMap = mapValidation(result);

		if (errorMap != null) {
			return errorMap;
		}

		menuItem = menuItemService.saveOrUpdate(menuItem);

		return new ResponseEntity<MenuItem>(menuItem, HttpStatus.CREATED);
	}

	/**
	 * A controller for handling #findByMenuItemIdentifier requests via the
	 * #findByMenuItemIdentifier service.
	 * 
	 * @param menuItemIdentifier
	 * @return
	 */

	@GetMapping("/{menuItemIdentifier}")
	public ResponseEntity<?> findByMenuItemIdentifier(@PathVariable String menuItemIdentifier) {

		MenuItem menuItem = menuItemService.findByMenuItemIdentifier(menuItemIdentifier);

		return new ResponseEntity<MenuItem>(menuItem, HttpStatus.OK);

	}

	/**
	 * A controller for handling #getAllMenuItems requests via the #findAllMenuItems
	 * service.
	 * 
	 * @return
	 */

	@GetMapping("")
	public Iterable<MenuItem> getAllMenuItems() {
		return menuItemService.findAllMenuItems();
	}

	/**
	 * A controller for handling #deleteMenuItem requests via the
	 * #deleteMenuItemByIdentifier service.
	 * 
	 * @return
	 */

	@DeleteMapping("/{menuItemIdentifier}")
	public ResponseEntity<?> deleteMenuItem(@PathVariable String menuItemIdentifier) {

		menuItemService.deleteMenuItemByIdentifier(menuItemIdentifier);

		return new ResponseEntity<String>("Menu item " + menuItemIdentifier + " deleted", HttpStatus.OK);
	}
}
