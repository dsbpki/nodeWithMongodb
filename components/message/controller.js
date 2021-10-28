const store = require('./store')
function addMessage(user,message){
    return new Promise((resolve,reject)=>{
        if(!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Datos incorrectos');
        }
        const fullMessage={
            user,
            message,
            date : new Date()
        }
        console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)

    })   

}
function getMessages(){
    return new Promise((resolve,reject)=>{
        resolve(store.list);
    })
}
module.exports={
    addMessage,
    getMessages
}