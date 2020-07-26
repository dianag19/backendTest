const db = require('mongoose'); //trae libreria

db.Promise = global.Promise;


async function connect(uri){
    
    await db.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('MongoDB Connected…');
    })
    .catch(err => console.log(err))
}
// db.connect('mongodb+srv://dianag:diana9908@cluster0.xxrt3.mongodb.net/testdbcollection?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
// });
// console.log('[db] Conectada con éxito')

module.exports = connect;

