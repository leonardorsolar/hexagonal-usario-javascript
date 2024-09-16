//const request = require("supertest")
//const app = require("../src/app") // Importa o app Express

describe("GET /", () => {
    test.skip("responds with Hello World!", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Hello World!")
    })
})
