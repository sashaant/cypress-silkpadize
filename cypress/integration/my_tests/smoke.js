describe('Browser actions', () => {
    it('should load the correct url', () => {
        cy.visit('http://example.com',{Timeout:10000})
    })

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')   
    })

    it('should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')   
    })
})
      

