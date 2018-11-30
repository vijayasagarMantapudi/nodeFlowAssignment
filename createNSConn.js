function createNSConnection(callback) {
    var body = 
        {
            type: "netsuite",
            name: "NsConnectionForImport_V1",
            netsuite: {
                account: "TSTDRV1633035",
                roleId: "3",
                email: "vijaysagar.mantapudi@celigo.com",
                password: "******",
                environment: "production",
                requestLevelCredentials: false,
                dataCenterURLs: {
                    restDomain: "https://rest.netsuite.com",
                    webservicesDomain: "https://webservices.netsuite.com",
                    systemDomain: "https://system.netsuite.com"
                },
                wsdlVersion: "current",
                concurrencyLevel: 1
            }
        };

    var opts = {
        method: 'POST',
        uri: 'https://api.staging.integrator.io/v1/connections',
        headers: [
            {
              name: 'content-type',
              value: 'application/json'
            }
          ],
        auth: {
            bearer: '0f6b************b1f07dff47f'
        },
        body:body,
        json:true
    };

    var request = require("request");
    request(opts, function(err, res) {
        if(err) {
            return callback(err)
        }
        id=res.body._id;
        return callback(null, id);
    });

}

module.exports=createNSConnection;