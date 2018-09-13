Feature: Routes screen

	Scenario: As a user I want to be able search for a route in a route detail view and see it in the map.
		Given I press "Paraderos"
		#button to remove the splash screen
		Given I press "Rutas"
		And I press view with id "action_search_toolbar"
		And I enter text "Portal el Dorado" into field with id "search_src_text"
		And I press the enter button
		And I wait
		And I wait for the view with id "recyclerView" to appear
		And I press route list item number 1
		And I press view with id "action_map"
		Then I see the text "Portal el Dorado"

	Scenario: As a user I want to be able search for a route in a station detail view and see it in the map.
		Given I press "Rutas"
		And I press view with id "action_search_toolbar"
		And I enter text "Portal el Dorado" into field with id "search_src_text"
		And I press the enter button
		And I wait
		And I wait for the view with id "recyclerView" to appear
		And I press route list item number 1
		And I press "Modelia"
		And I press view with id "action_map"
		Then I wait for the view with id "map" to appear

	Scenario: As a user I want to be able search for a route and try to save it to favorites.
		Given I press "Rutas"
		And I press view with id "action_search_toolbar"
		And I enter text "Portal el Dorado" into field with id "search_src_text"
		And I press the enter button
		And I wait
		And I wait for the view with id "recyclerView" to appear
		And I press route list item number 1
		And I press view with id "action_favorite"
		And I wait
		Then I see the text "Se requiere autenticación"

