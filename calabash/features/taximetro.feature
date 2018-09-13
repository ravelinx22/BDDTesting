Feature: Taximetro screen

	Scenario: As a user I want to be able to calculate a simple rate for 200 units.
		Given I press "Paraderos"               
		#button to remove the splash screen
		When I swipe left
		Given I press "Taximetro"
		And I enter text "200" into field with id "editUnits"
		Then I see the text "17,100"

	Scenario: As a user I want to be able to calculate a simple rate with night charge for 200 units.
		Given I wait
		Given I swipe left
		And I press "Taximetro"
		And I press view with id "cardNight"
		And I enter text "200" into field with id "editUnits"
		Then I see the text "19,100"

	Scenario: As a user I want to be able to calculate a simple rate with night charge and airport charge for 200 units.
		Given I wait
		Given I swipe left
		And I press "Taximetro"
		And I press view with id "cardNight"
		And I press view with id "cardAirport"
		And I enter text "200" into field with id "editUnits"
		Then I see the text "23,200"

