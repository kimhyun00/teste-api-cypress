# 🧪 Testes de API com Cypress

Projeto de automação de testes de API desenvolvido durante meus estudos em Quality Assurance (QA), utilizando Cypress e a API ServeRest.

## 🎯 Objetivo

Praticar a automação de testes de API REST, validando respostas HTTP, estrutura dos dados, mensagens retornadas e tempo de resposta das requisições.

## 🛠️ Tecnologias utilizadas

* JavaScript
* Cypress
* Node.js
* ServeRest
* Git e GitHub

## ✅ Cenários de teste

**Login**

* Validação de login realizado com sucesso.
* Verificação do status HTTP 200.
* Validação da mensagem retornada pela API.

**Produtos**

* Listagem de produtos.
* Verificação do status HTTP 200.
* Validação dos dados de um produto.
* Verificação da estrutura da resposta.
* Validação do tempo de resposta da API.

## 🚀 Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/kimhyun00/teste-api-cypress.git
```

**2. Acesse a pasta:**

```bash
cd teste-api-cypress
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie a API ServeRest localmente:**

```bash
npx serverest
```

**5. Em outro terminal, abra o Cypress:**

```bash
npx cypress open
```

Selecione os testes E2E e execute os cenários desejados.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

* Automação de testes de API com Cypress.
* Requisições HTTP utilizando `cy.request()`.
* Validação de respostas com assertions.
* Configuração de `baseUrl`.
* Organização de testes automatizados.
* Versionamento de código com Git e GitHub.

## 👨‍💻 Autor

**Hyun Kim**

[GitHub](https://github.com/kimhyun00)
