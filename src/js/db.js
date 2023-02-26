let mySql = require('mysql');
let connection = mySql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'users',
})

connection.connect(() => {
    console.log('success');
});


exports.sendquery = () =>{

        connection.query(query);
    }    


// connection.query(``);


