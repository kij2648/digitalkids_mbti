const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'digitalkids.ctldyevd7fsr.ap-northeast-2.rds.amazonaws.com',
    user:'digitalkids',
    password:'lotte89!',
    port:3306,
    database: 'mbti',
});

connection.connect();

connection.query('SELECT * FROM my_page', function(error, results, fields) {
    if(error){
        console.log(error);
    }
    console.log(results);
});

connection.end();