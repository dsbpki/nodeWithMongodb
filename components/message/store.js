const db = require('mongoose');
const Model = require('./model')

const uri =
'mongodb://dbenjum:ajedrez94@telegrom-shard-00-00.u4tyo.mongodb.net:27017,telegrom-shard-00-01.u4tyo.mongodb.net:27017,telegrom-shard-00-02.u4tyo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-21hq6l-shard-0&authSource=admin&retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}


async function getMessages(filterUser) {
  let filter ={};
  if(filterUser !== null){
    filter = {user: filterUser}

  }
  const messages= await Model.find(filter);
  return messages;

}

async function updateText(id, message){
  const foundMessage = await Model.findOne({
    _id: id,
  })
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}
function removeMessage(id){
  return Model.deleteOne({
    _id: id,
  })
}
module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
  //get
  // update
  // delete
};

//mongosh "mongodb+srv://cluster0.ilird.mongodb.net/myFirstDatabase" --username new_user
// this code is working well too, but prefer the other for the promise implementation
// db.Promise = global.Promise;
// db.connect('mongodb://dbenjum:ajedrez94@telegrom-shard-00-00.u4tyo.mongodb.net:27017,telegrom-shard-00-01.u4tyo.mongodb.net:27017,telegrom-shard-00-02.u4tyo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-21hq6l-shard-0&authSource=admin&retryWrites=true&w=majority',{
//     useNewUrlParser: true,
// })
// console.log('db conectada con exito')

// function addMessage(message){
//     //list.push(message)
//     const myMessage = new Model(message);
//     myMessage.save();
// }
// function getMessage(){
//     return list;
// }
// module.exports = {
//     add: addMessage,
//     list : getMessage
// }
////////////////////////////////////////////////////////