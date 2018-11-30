function createFlowAPItoNS(id,callback){
    var bod = {
        name: "TestAPItoNSSalesOrderFlow_v1",
        disabled: false,
        skipRetries: false,
        pageProcessors: [
            {
                type: "import",
                _importId: id['nsImp1'],
                responseMapping: {
                    lists: [],
                    fields: [
                        {
                            extract: "id",
                            generate: "custId"
                        }
                    ]
                }
            },
            {
                type: "import",
                _importId: id['nsImp2'],
                responseMapping: {
                    lists: [],
                    fields: []
                }
            }
        ],
        pageGenerators: [
            {
                _exportId: id['expRest']
            }
        ]
    }

    var opts = {
        method: 'POST',
        uri: 'https://api.staging.integrator.io/v1/flows',
        headers: [
            {
              name: 'content-type',
              value: 'application/json'
            }
          ],
        auth: {
            bearer: '0f6b************b1f07dff47f'
        },
        body:bod,
        json:true
    };

    var request = require("request");
    request(opts, function (err, res) {
        if (err) {
            return callback(err)
        }
        id=res.body._id;
        return callback(null, id);
    });

}
module.exports=createFlowAPItoNS;