package io.pizzeria.exceptions;

public class MenuItemIdentifierExceptionResponse {

	/*
	 * Fields
	 */

	private String menuItemIdentifier;

	/*
	 * Constructors
	 */

	public MenuItemIdentifierExceptionResponse(String menuItemIdentifier) {
		this.menuItemIdentifier = menuItemIdentifier;
	}

	/*
	 * Getters and setters
	 */

	public String getMenuItemIdentifier() {
		return menuItemIdentifier;
	}

	public void setMenuItemIdentifier(String menuItemIdentifier) {
		this.menuItemIdentifier = menuItemIdentifier;
	}

}
