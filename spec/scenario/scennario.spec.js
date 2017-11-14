var chakram = require('chakram');
var expect = chakram.expect;

var SERVER_URL = "http://localhost:8089/api";

describe("describe the scenario", function () {

    it("should do rest call", function () {

        var requestBody = {};

        var expectedResponseBody = {};


        return chakram.get(SERVER_URL, requestBody)
            .then(function (response) {
                expect(response).to.have.status(200);
                expect(response).to.have.json(expectedResponseBody);
            })
    });
});
