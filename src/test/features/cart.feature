Feature: Cart

  Scenario: As an anonimous user, I can add a game to cart

    Given I am on the 'home' page
    When I click on windows button
      And I search with 'Xbox' and click comprar
      And I select juegos digitales
    #Then I should see a 'admin' user in the dashboard page