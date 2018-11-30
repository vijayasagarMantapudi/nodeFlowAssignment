function createNScustImport(connId,callback) {
    var impBody = {
        name: "Ns import from node_V1",
        description: "NS import for Orch test from Rest API_from node",
        sampleResponseData: "",
        responseTransform: {
            type: "expression",
            expression: {
                version: "1"
            },
            version: "1"
        },
        _connectionId: connId,
        distributed: true,
        apiIdentifier: "i00c6b07d7",
        lookups: [],
        netsuite_da: {
            operation: "add",
            recordType: "customer",
            lookups: [],
            mapping: {
                lists: [],
                fields: [
                    {
                        generate: "subsidiary",
                        extract: "subsidiary",
                        internalId: true,
                        immutable: false
                    },
                    {
                        generate: "firstname",
                        extract: "firstname",
                        internalId: false,
                        immutable: false
                    },
                    {
                        generate: "phone",
                        extract: "phone",
                        internalId: false,
                        immutable: false
                    },
                    {
                        generate: "companyname",
                        extract: "companyname",
                        internalId: false,
                        immutable: false
                    }
                ]
            }
        },
        filter: {
            type: "expression",
            expression: {
                version: "1",
                rules: []
            },
            version: "1",
            rules: []
        },
        adaptorType: "NetSuiteDistributedImport"
    }

    var opts = {
        method: 'POST',
        uri: 'https://api.staging.integrator.io/v1/imports',
        headers: [
            {
              name: 'content-type',
              value: 'application/json'
            }
          ],
        auth: {
            bearer: '0f6b************b1f07dff47f'
        },
        body:impBody,
        json:true
    };

    var request = require("request");
    request(opts, function(err, res) {
        if(err) {
            return callback(err)
        }
        return callback(null,res.body._id)
    });

}
module.exports=createNScustImport;