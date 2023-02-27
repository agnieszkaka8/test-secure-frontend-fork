import { faker } from '@faker-js/faker';

/// <reference types="cypress" />

describe('Register page tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081/register')
    })

    it.only('should register successfully', () => {
        cy.get('[name=username]').type(faker.internet.userName())
        cy.get('[name=password]').type(faker.internet.password())
        cy.get('[name=firstName]').type(faker.name.firstName())
        cy.get('[name=lastName]').type(faker.name.lastName())
        cy.get('[name=email]').type(faker.internet.email())
        cy.get('.btn-primary').click()

        cy.get('.alert-success').should('have.text', 'Registration successful')

    })

    it('should fail to register', () => {
        cy.get('[name=username]').type('admin')
        cy.get('[name=password]').type('wrong')
        cy.get('[name=firstName]').type('wrong')
        cy.get('[name=lastName]').type('wrong')
        cy.get('[name=email]').type('email@stonex.com')
        cy.get('.btn-primary').click()

        cy.get('.alert-danger').should('have.text', 'Username is already in use')

    })

  })
  