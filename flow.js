const createRestConnetion = require('./CreateAPIconn.js')
const createNSConnection = require('./createNSConn.js')
const createExport = require('./CreateAPIExport.js')
const createNSCustomer = require('./NScustomerImport.js')
const createSalesOrder = require('./createNS_SO_import.js')
const createFlow = require('./createFlow.js')

const async = require('async')
function callback(err, res) {
    if (err) {
        console.log('error: ', err)
    }
    console.log('Success')
}
var obj = {'rest':createRestConnetion,'ns':createNSConnection};
var id = {};
function mainFlow(objects,cb){
    async.forEachOf(objects, function (value, key,c1) {
        
        value(function(err,idValue) {
            if(err) {
                return c1(err)
            }
            id[key]=idValue
            return c1();
        });
    }, function (err) {
        if (err) return cb("error")      
        createExport(id['rest'],function(err,expId){
            if(err) {
                return cb(err)
            }
            id['expRest']=expId;
            createNSCustomer(id['ns'],function(err,impId){
                if(err) {
                    return cb(err)
                }
                id['nsImp1']=impId;
                createSalesOrder(id['ns'],function(err,impId2){
                    if(err) {
                        return cb(err)
                    }
                    id['nsImp2']=impId2;
                    console.log(id);
                    return cb(null, "Success")
                });
                });
            
        })  ;
    });
}


mainFlow(obj,function(err){
    if(err)
    return callback('error');
    createFlow(id,function(err,flowId){
        if(err)
        return callback('error')
        console.log('flowId:',flowId)
        return callback(null,'success');
    });
});
