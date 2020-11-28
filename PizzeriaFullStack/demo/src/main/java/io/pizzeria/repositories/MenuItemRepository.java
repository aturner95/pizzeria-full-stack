package io.pizzeria.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.pizzeria.domain.MenuItem;

@Repository
public interface MenuItemRepository extends CrudRepository<MenuItem, Long> {

	/**
	 * Overridden CRUD operation
	 */
	@Override
	Iterable<MenuItem> findAll();

	/**
	 * Custom CRUD operation
	 * 
	 * @param menuItemIdentifier
	 * @return
	 */
	MenuItem findByMenuItemIdentifier(String menuItemIdentifier);
}
