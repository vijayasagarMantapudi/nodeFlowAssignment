const rqst=require('./performRequest.js');
function createRESTAPIConnection(callback) {
    var body =
    {
        type: "rest",
        name: "RestApiConnection_V1",
        rest: {
            baseURI: "http://www.mocky.io/v2/5bfe59013100006a002cfd4f",
            mediaType: "json",
            authType: "basic",
            headers: [
                {
                    name: "content-type",
                    value: "application/json"
                }
            ],
            encryptedFields: [],
            unencryptedFields: [],
            scope: [],
            pingRelativeURI: "/",
            pingSuccessValues: [],
            pingMethod: "GET",
            basicAuth: {
                username: "sdvsdv",
                password: "******"
            }
        },
        queues: [
            {
                name: "5bfd1c9df85e4a69560ba441",
                size: 0
            }
        ]
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
            bearer: '0f6b7cccd72b********1f07dff47f'
        },
        body: body,
        json: true
    };
    
    rqst(opts,callback);
    
}

module.exports=createRESTAPIConnection;