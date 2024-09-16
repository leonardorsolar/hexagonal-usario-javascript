// tests/usuario.test.js

const Usuario = require("../src/modulos/usuario/dominio/Usuario")

describe("Testando a classe Usuario", () => {
    it("Deve criar uma instância da classe Usuario com os atributos corretos", () => {
        const nome = "Leonardo"
        const email = "leonardo@example.com"
        const senha = "senha123"

        const usuario = new Usuario(nome, email, senha)

        //expect(usuario).toBeInstanceOf(Usuario)
        expect(usuario.nome).toBe(nome)
        expect(usuario.email).toBe(email)
        expect(usuario.senha).toBe(senha)
    })
})
