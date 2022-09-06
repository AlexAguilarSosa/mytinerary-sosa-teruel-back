const request = require('supertest')
const { response } = require('../server')
const server = require('../server')
const {assert} = require('chai')


describe('POST /cities', function(){

    it('Must respond with id', function(done){
        request(server)
            .post('/cities')
            .send({    
                city: "Mendoza",
                country: "Argentina",
                photo: "/img/mendoza.jpg",
                population: "1075737",
                foundation: "1561",
                currency: "ARS",
                highseason: "December-March/May-August"
            })
            .then(response =>{
                assert.isString(response.body.response)
                done()
            })
    })

    
    it('Must response with 201 status code', function(done){
        request(server)
            .post('/cities')
            .send({    
                city: "Mendoza",
                country: "Argentina",
                photo: "/img/mendoza.jpg",
                population: "1075737",
                foundation: "1561",
                currency: "ARS",
                highseason: "December-March/May-August"
            })
            .expect(201)
            .end(function(err, res){
                if(err){
                    return done(err);
                }
                return done();
            })
    })

    it('Must response with 400 status code', function(done){
        request(server)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function(err, res){
                if(err){
                    return done(err);
                }
                return done();
            })
    })
})