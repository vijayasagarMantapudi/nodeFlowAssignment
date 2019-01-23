function createNScustImport(connID,callback) {
    var impBody = {
        name: "salesorder import2_V1",
        description: "to create sales order from Orc222",
        sampleResponseData: "",
        responseTransform: {
            type: "expression",
            expression: {
                version: "1"
            },
            version: "1"
        },
        _connectionId: connID,
        distributed: true,
        apiIdentifier: "i404d7d0de",
        lookups: [],
        netsuite_da: {
            operation: "add",
            recordType: "salesorder",
            lookups: [],
            mapping: {
                lists: [
                    {
                        generate: "item",
                        fields: [
                            {
                                generate: "quantity",
                                extract: "items[*].qty",
                                internalId: false,
                                immutable: false
                            },
                            {
                                generate: "item",
                                extract: "items[*].item1",
                                internalId: true,
                                immutable: false
                            },
                            {
                                generate: "amount",
                                extract: "items[*].amount",
                                internalId: false,
                                immutable: false
                            }
                        ]
                    }
                ],
                fields: [
                    {
                        generate: "entity",
                        extract: "custId",
                        internalId: true,
                        immutable: false
                    }
                ]
            }
        },
        filter: {
            type: "expression",
            expression: {
                rules: [],
                version: "1"
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
            bearer:'0f6b************b1f07dff47f'
        },
        body: impBody,
        json: true
    };

    var request = require("request");
    request(opts, function (err, res) {
        if (err) {
            return callback(err)
        }
        return callback(null,res)
    });

}
module.exports=createNScustImport;