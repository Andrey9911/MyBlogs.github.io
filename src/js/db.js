// const express = require('express');
    // const app = express();
// let mySql = require('mysql');

// let connection = mySql.createConnection({
//     host: 'localhost',
//     user: '',
//     password: '',
//     database: 'users',
// })

// connection.connect(() => {
//     console.log('success');
// });


// module.exports = {
//     sendquery: () =>{
//         connection.query(query);
//     }    
// }

// app.get('/',(req, res) => res.send('Hello World!'));
// app.listen(() => console.log('Example app listening on port 3000!'),3000)

function addNewUser(user)
{
    let db = indexedDB.open('DataBase', 1);

    db.onsuccess = () => {
        let database = db.result;
        let users = database.createObjectStore('users', {keyPath: 'id',autoIncrement: true})
        let transaction = database.transaction('users', 'readwrite');
        usersDB = transaction.objectStore('users');
        usersDB.add(user)
    };

}



