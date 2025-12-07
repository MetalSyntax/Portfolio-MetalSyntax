describe('Portfolio Home Page Tests', () => {
    beforeEach(() => {
        // Visit the home page before each test
        cy.visit('/');
    });

    it('Loads the page successfully', () => {
        // Verify the URL is correct
        cy.url().should('include', '/');
        // Verify the title tag
        cy.title().should('include', 'Wonder Diaz');
    });

    it('Displays the main title (h1)', () => {
        // Check for the main heading
        cy.get('h1').should('be.visible').and('contain.text', 'Wonder Díaz');
    });

    it('Handles responsive navigation correctly', () => {
        // 1. Desktop View
        cy.viewport(1280, 720);
        // The mobile menu button should be hidden
        // Targeting the button inside the div with class 'block lg:hidden'
        // Note: We need to escape the colon in the class name for the selector
        cy.get('.block.lg\\:hidden button').should('not.be.visible');

        // The navigation links should be visible in the desktop menu
        // We check for the 'Home' link
        cy.contains('a', 'Home').should('be.visible');

        // 2. Mobile View
        cy.viewport('iphone-x'); // 375 x 812
        // The mobile menu button should now be visible
        cy.get('.block.lg\\:hidden button').should('be.visible');

        // The navigation links should be hidden initially (menu is closed)
        // We check that the 'Home' link is not visible
        cy.contains('a', 'Home').should('not.be.visible');

        // Click the menu button to open the menu
        cy.get('.block.lg\\:hidden button').click();

        // Now the links should be visible
        cy.contains('a', 'Home').should('be.visible');
    });
});
