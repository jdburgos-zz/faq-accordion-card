describe('App component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the base content', () => {
    cy.title().should('include', 'FAQ accordion card');
    cy.get('[alt="box"]').invoke('attr', 'src').should('eq', '/faq-accordion-card/images/illustration-box-desktop.svg');
    cy.get('[alt="woman online"]').invoke('attr', 'src').should('eq', '/faq-accordion-card/images/illustration-woman-online-mobile.svg');
    cy.get('[alt="shadow"]').invoke('attr', 'src').should('eq', '/faq-accordion-card/images/bg-pattern-mobile.svg');
    cy.get('h1').should('contain.text','FAQ');
    cy.contains('How many team members can I invite?');
    cy.contains('What is the maximum file upload size?');
    cy.contains('How do I reset my password?');
    cy.contains('Can I cancel my subscription?');
    cy.contains('Do you provide additional support?');
  });

  describe('should open the item', () => {
    it('How many team members can I invite?', () => {
      cy.get('[data-cy="faq-item"]').first().click();
      cy.contains('How many team members can I invite?');
      cy.contains('You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.');
    });

    it('What is the maximum file upload size?', () => {
      cy.get('[data-cy="faq-item"]').eq(1).click();
      cy.contains('What is the maximum file upload size?')
      cy.contains('No more than 2GB. All files in your account must fit your allotted storage space.')
    });

    it('How do I reset my password?', () => {
      cy.get('[data-cy="faq-item"]').eq(2).click();
      cy.contains('How do I reset my password?')
      cy.contains('Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.')
    });

    it('Can I cancel my subscription?', () => {
      cy.get('[data-cy="faq-item"]').eq(3).click();
      cy.contains('Can I cancel my subscription?')
      cy.contains('Yes! Send us a message and we’ll process your request no questions asked.')
    });

    it('Do you provide additional support?', () => {
      cy.get('[data-cy="faq-item"]').eq(4).click();
      cy.contains('Do you provide additional support?')
      cy.contains('Chat and email support is available 24/7. Phone lines are open during normal business hours.')
    });
  });

  describe('should re-organize the items', () => {
    it('in mobile version', () => {
      cy.viewport(575, 800);
      cy.get('[alt="box"]').should('not.be.visible');
    });
  });
});
