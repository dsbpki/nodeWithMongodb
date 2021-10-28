exports.success = function(req,res,message,status){
    console.log('Todo good!')
    res.status(status || 200).send({
        error: '',
        body: message
    })
}
exports.error = function(req,res,message,status, details){
    console.error(`[error response]: ${details}`)
    res.status(status || 500).send({
        error : message,
        body: ''
    })
}