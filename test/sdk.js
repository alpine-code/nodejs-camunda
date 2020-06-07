var chai = require('chai');
var assert = chai.assert;

var AlpineCodeSDK = require('../src');

describe('AlpineCodeSDK', function () {
    describe('CamundaSDK', function () {

        var camClient = new AlpineCodeSDK.CamundaSDK.Client({
            mock: false,
            // the following URL does not need authentication,
            // but the tradeof is that some requests will fail
            // e.g.: some filters use the reference to the user performing the request
            apiUri: 'https://camunda.alpine-code.com/engine-rest'
        });
        var processDefinitionService = new camClient.resource('process-definition');
        var processInstanceService = new camClient.resource('process-instance');
        var filterService = new camClient.resource('filter');
        var deploymentService = new camClient.resource('deployment');

        it('Camunda Client', function () {
            assert.typeOf(camClient, 'Object')
        }); 

        it('Camunda Process Definitions', function () {
            processDefinitionService.list({}, function (err, results) {
                assert.typeOf(results.items, 'Array');
            });
        }); 

    });
});