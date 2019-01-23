function createExportRestAPI(connId,callback){
    var expBody = {
        name: "sampleMockyRESTxport2_V1",
        description: "sample",
        _connectionId: connId,
        apiIdentifier: "ec9366bdfd",
        asynchronous: true,
        parsers: [],
        sampleData: {
            companyname: "Or_test1",
            subsidiary: 3,
            isperson: "T",
            firstname: "vj",
            phone: "7382244055",
            items: [
                {
                    item1: 3678,
                    qty: 1,
                    amount: 2220
                }
            ]
        },
        rest: {
            relativeURI: "/",
            method: "POST",
            headers: [],
            postBody: []
        },
        transform: {
            type: "expression",
            expression: {
                version: "1"
            },
            version: "1"
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
        adaptorType: "RESTExport"
    }

    var opts = {
        method: 'POST',
        uri: 'https://api.staging.integrator.io/v1/exports',
        headers: [
            {
              name: 'content-type',
              value: 'application/json'
            }
          ],
        auth: {
            bearer: '0f6b************b1f07dff47f'
        },
        body:expBody,
        json:true
    };

    var request = require("request");
    request(opts, function(err, res) {
        if(err) {
            return callback(err)
        }
        return callback(null,res);
    });
}

module.exports=createExportRestAPI;