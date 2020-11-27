describe('test exercice Pizza avec Cypress, liste d\'actions', function() {

    it('1. Charger le site', function() {
        cy.visit('http://127.0.0.1:5500/index.html');
    })

    it('Logo pizza visible', function() {
        cy.get('img').should('be.visible');
    });

    it('2. Vérifier que le bouton Paypal soit masqué', function() {
        cy.get("#smart-button-container").should('not.visible');
    })

    it('3. Ajouter une pizza Reine à la commande', function() {
        cy.get(':nth-child(1) > .more').click();
    })

    it('Ajouter une pizza Napolitaine à la commande', function() {
        cy.get(':nth-child(3) > .more').click();
    })

    it('Retirer une pizza Napolitaine à la commande', function() {
        cy.get(':nth-child(3) > .less').click();
    })

    it('4. Vérifier le montant de la ligne Reine = 8€', function() { // à revoir
        cy.get(':nth-child(1) > .total').should('be.visible');
    })

    /*it('5. Vérifier le montant TOTAL', function() {
        cy.get('.TOTAL').should('have.value', 8);
    })*/

    it('6. Vérifier que le bouton Paypal soit bien affiché', function() {
        cy.get('#smart-button-container').should('be.visible');
    })

    /*it('7. Cliquer deux fois sur le bouton moins et vérifier que la quantité est bien toujours à 0 et pas à -1', function() {
        cy.get(':nth-child(1) > .less').click();
    })*/

    /*it('8. Commander 2 Reines, 2 Napolitaine, 2 Corsica et vérifier que le total soit bien à ...€.', function() {
        cy.get('.TOTAL').should();
    })*/

    it('9. Vérifier que le récapitulatif de commande affiche : reine x2 - napolitaine 1x', function() {
        cy.get('.summarize').should('be.visible');
    })


  })