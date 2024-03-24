describe(
  "booksApp тест на экране ноутбука",
  {
    viewportHeight: 768,
    viewportWidth: 1366,
  },
  () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Проверка отображения страницы", () => {
      cy.contains("Books list").should("be.visible");
    });
  })

  describe(
      "booksApp тест на экране смартфона",
      {
        viewportHeight: 640,
        viewportWidth: 360,
      },
      () => {
        beforeEach(() => {
          cy.visit("/");
        });
    
        it("Проверка отображения страницы", () => {
          cy.contains("Books list").should("be.visible");
        });
      })

describe('should login with valid data', () => {
  beforeEach(() => {
    
    cy.visit("/")
  })

  it('positive login', () => {
   
   cy.login(`test@test.com`, `test`)
    cy.contains('Добро пожаловать test@test.com').should(`be.visible`)
  })
  it('should not login if no password', () => {
      cy.login('test@test.com', null)
      cy.get('#pass').then((elements) => {
          expect(elements[0].checkValidity()).to.be.false
          expect(elements[0].validationMessage).to.be.eqls('Заполните это поле.')
      })
  })
  it('should add a book',() => {
      cy.login(`test@test.com`, `test`)
      cy.addBook('Нос', 'Гоголь')
      cy.contains('Нос').should(`be.visible`)
      cy.contains('Гоголь').should(`be.visible`)
  })
  it('should add to favorities', () => {
      cy.login(`test@test.com`, `test`)
      cy.contains('Нос').contains('Add to favorite').click()
      cy.get('h4').click()
      cy.contains('Нос').should('to.be.visible')
  })
  it('should remove from favorities', () => {
      cy.login(`test@test.com`, `test`)
      cy.get('h4').click()
      cy.contains('Нос').contains('Delete from favorite').click()
      cy.contains('Books list').click()
      cy.contains('Нос').should(`be.visible`)
})
})