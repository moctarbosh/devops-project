const request = require("supertest");

const app = require("../../server.js");

describe("Test basic endpoints", (done) => {
    test("GET / should be 200", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect((res) => {
                expect(res.body).toEqual("Welcome on express-authors API !")
            })
            .end(done)
            
    });
    test("GET /test should be 404", (done) => {
        request(app)
            .get("/test")
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual("Route not found")
            })
            .end(done)
    });
});

describe("Test AUTHORS endpoints", (done) => {
    test("GET /authors should be 200 and length 5", (done) => {
        request(app)
            .get("/authors")
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveLength(5)
            })
            .end(done)
            
    });
    test("GET /authors/1 should be 200 and firstname Edgar", (done) => {
        request(app)
            .get("/authors/1")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].FirstName).toEqual("Edgar");
            })
            .end(done)
    });
    test("GET /authors/1 should be 200 and author's firstname Edgar", (done) => {
        request(app)
            .get("/authors/1")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].FirstName).toEqual("Edgar");
            })
            .end(done)
    });
    test("GET /authors/2 should be 200 and author lastName Heinlein", (done) => {
        request(app)
            .get("/authors/2")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].LastName).toEqual("Heinlein");
            })
            .end(done)
    });
    test("GET /authors/3 should be 200 and have 2 genres", (done) => {
        request(app)
            .get("/authors/3")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].Genres).toHaveLength(2);
            })
            .end(done)
    });
    test("GET /authors/10 should be 404", (done) => {
        request(app)
            .get("/authors/10")
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual({})
            })
            .end(done)
    });
    test("GET /authors/4 should be 200 and author's middlename R. R.", (done) => {
        request(app)
            .get("/authors/4")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].MiddleName).toEqual("R. R.")
            })
            .end(done)
    });
    test("GET /authors/5 should be 200 and author's id 5", (done) => {
        request(app)
            .get("/authors/5")
            .expect(200)
            .expect((res) => {
                expect(res.body[0].Id).toEqual(5)
            })
            .end(done)
    });
});