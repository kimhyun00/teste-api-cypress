/// <reference types="cypress"/>

describe('Testes da Funcionalidade Produtos', () => {

    it('Listar Produtos', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(15)
            })
    });

    it.only('Cadastrar Produto', () => {
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers:{authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzg5OTk2NjM0LCJleHAiOjE3ODk5OTcyMzR9.9KeEuYytst8pthLyrRoH9m5P0fFZcamgeYaNkHpsH6g'},
            body: {
                "nome": "Nintendo",
                "preco": 300,
                "descricao": "Console portátil",
                "quantidade": 420
                }
        }).then((response) =>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
        
    });
    
});