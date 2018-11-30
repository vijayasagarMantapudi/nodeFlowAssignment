const request = require("request");

function doRequest(opts,callback){
    request(opts, function (err, res) {
        if (err) {
            return callback(err)
        }
        
        return callback(null, res.body._id);
    });
}

module.exports=doRequest;