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
function getMessages(filterUser){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser));
    })
}

 function updateMessage(id,message){
    return new Promise(async (resolve,reject)=>{
        if(!id || !message){
            reject('Invalid data')
            return false;
        }
        const result= await store.updateText(id,message);
        resolve(result);
    })

}

function deleteMessage(id){
    if(!id){
        reject('Id invalida')
        return false;
    }
    return new Promise((resolve,reject)=>{
        store.remove(id)
            .then(()=>{
                resolve()
            })
            .catch(e=>{
                reject(e)
            })
        })
    
    }
module.exports={
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}