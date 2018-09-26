const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qq19951991',
    database: 'test01'
});

connection.connect();

// 封装mysql的异步操作， 返回promise
function query(...params) {
    return new Promise((resolve, reject) => {
        connection.query(...params, function (error, results, fields) {
            if (error){
                reject(error)
            }
            resolve(results)
        })
    }) 
}

console.log('mysql connect success!!!');
module.exports = query