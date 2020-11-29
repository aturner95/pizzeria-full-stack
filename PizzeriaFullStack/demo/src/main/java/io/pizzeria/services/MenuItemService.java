package io.pizzeria.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.pizzeria.domain.MenuItem;
import io.pizzeria.exceptions.MenuItemIdentifierException;
import io.pizzeria.repositories.MenuItemRepository;

@Service
public class MenuItemService {

	@Autowired
	private MenuItemRepository menuItemRepository;

	/**
	 * A service to save or update menu items
	 * 
	 * @param menuItem
	 * @return MenuItem
	 */
	public MenuItem saveOrUpdate(MenuItem menuItem) {

		try {
			menuItem.setMenuItemIdentifier(menuItem.getMenuItemIdentifier().toUpperCase().trim());
			return menuItemRepository.save(menuItem);
		} catch (Exception ex) {
			throw new MenuItemIdentifierException(
					"Menu identifier " + menuItem.getMenuItemIdentifier() + " already exists");
		}

	}

	/**
	 * A service to return a menu item by the unique menu item identifier
	 * 
	 * @param menuItemIdentifier
	 * @return MenuItem
	 */

	public MenuItem findByMenuItemIdentifier(String menuItemIdentifier) {
		MenuItem menuItem = menuItemRepository.findByMenuItemIdentifier(menuItemIdentifier.toUpperCase());

		if (menuItem == null) {
			throw new MenuItemIdentifierException("Menu item " + menuItemIdentifier + " does not exist");

		}

		return menuItem;
	}

	/**
	 * A service to return all menu items
	 * 
	 * @return Iterable
	 */
	public Iterable<MenuItem> findAllMenuItems() {
		return menuItemRepository.findAll();
	}

	/**
	 * A service to delete a menu item specified by the unique menu item identifier
	 * 
	 * @param menuItemIdentifier
	 */
	public void deleteMenuItemByIdentifier(String menuItemIdentifier) {

		MenuItem menuItem = menuItemRepository.findByMenuItemIdentifier(menuItemIdentifier);

		if (menuItem == null) {
			throw new MenuItemIdentifierException(
					"Unable to delete menu item as " + menuItemIdentifier + " does not exist");
		}

		menuItemRepository.delete(menuItem);
	}
}
