import mysql from "mysql2";

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'User_management_API',
    waitForConnections:10
});

export default pool.promise();


// if(connection){
//     console.log("connected");
// }
// else{
//     console.log("not connected");
// }
