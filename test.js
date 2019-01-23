var assert = require('assert');
var nock = require('nock')
const createRestConnetion = require('./CreateAPIconn.js');
const createNSConnection = require('./createNSConn.js')
const createRESTExport = require('./CreateAPIExport.js');
const createNScustomerImport = require('./NScustomerImport.js');
const createNS_SOImport = require('./createNS_SO_import.js');
const createFlow = require('./createFlow.js');
describe('UnitTestCases started:', function () {
    describe('creating REST API connection', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/connections')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        it('should get expected response body', function (done) {
            createRestConnetion(function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('REST API connection - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/connections')
                .replyWithError({ 'message': 'Error while creating a connection', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        it('should get expected  Post error', function (done) {
            createRestConnetion(function (err, response) {
                var expected = { 'message': 'Error while creating a connection', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
    describe('creating NetSuite connection', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/connections')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        it('should get expected response body', function (done) {
            createNSConnection(function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('NetSuite connection - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/connections')
                .replyWithError({ 'message': 'Error while creating a connection', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        it('should get expected  Post error', function (done) {
            createNSConnection(function (err, response) {
                var expected = { 'message': 'Error while creating a connection', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
    describe('creating REST API export', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/exports')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        var connectionId=2345234523
        it('should get expected response body', function (done) {
            createRESTExport(connectionId,function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('REST API export - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/exports')
                .replyWithError({ 'message': 'Error while creating an export', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var connectionId=32452345
        it('should get expected  Post error', function (done) {
            createRESTExport(connectionId,function (err, response) {
                var expected = { 'message': 'Error while creating a connection', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
    describe('creating NS customer import', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/imports')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        var connectionId=2345234523
        it('should get expected response body', function (done) {
            createNScustomerImport(connectionId,function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('NS customer import - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/imports')
                .replyWithError({ 'message': 'Error while creating an import', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var connectionId=32452345
        it('should get expected  Post error', function (done) {
            createNScustomerImport(connectionId,function (err, response) {
                var expected = { 'message': 'Error while creating a connection', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
    describe('creating NS SalesOrder import', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/imports')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        var connectionId=2345234523
        it('should get expected response body', function (done) {
            createNS_SOImport(connectionId,function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('NS SalesOrder import - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/imports')
                .replyWithError({ 'message': 'Error while creating an import', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var connectionId=32452345
        it('should get expected  Post error', function (done) {
            createNS_SOImport(connectionId,function (err, response) {
                var expected = { 'message': 'Error while creating a connection', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
    describe('creating a flow', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/flows')
                .reply(200, { status: "ok" })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var statusCd=0
        var connectionId=[{'exp1':234523},{'imp1':3456345},{'imp2':345234}]
        it('should get expected response body', function (done) {
            createFlow(connectionId,function (err, response) {
                var expected = { status: "ok" }
                statusCd = response.statusCode
                assert(response.body, expected, "unexpected response")
                done()
            })
        })
        it('should get expected response statusCode- 201', function (done) {
            assert(201, statusCd, "status code is" + statusCd)
            done()
        })
    })
    describe('Create flow - with error response', function () {
        before(function (done) {
            nock('https://api.staging.integrator.io/v1')
                .post('/flows')
                .replyWithError({ 'message': 'Error while creating a flow', 'code': 'POST error' })
            done()
        })
        after(function (done) {
            nock.cleanAll()
            done()
        })
        var connectionId=[{'exp1':234523},{'imp1':3456345},{'imp2':345234}]
        it('should get expected  Post error', function (done) {
            createFlow(connectionId,function (err, response) {
                var expected = { 'message': 'Error while creating a flow', 'code': 'POST error' }
                assert(err, expected, "unexpected error")
                done()
            })
        })
    })
})