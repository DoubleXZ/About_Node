//Node操作MySQL数据库
const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'springbootdb'
});

connection.connect((error) => {
   if (error){
       console.log(error);
       throw error;
   }else{
       console.log('connection successful');
       //连接成功后，插入语句
       const userId = uuid.v1();
       const username = 'nihao';
       const real_name = '薛大米';
       const age = 1;
       const address = '青岛';

       connection.query('insert into users set ?', {
           id:userId,
           username:username,
           real_name:real_name,
           age:age,
           address,address
       }, (error, result) => {
           if (error) {
               console.log('insert error occured: ' + error);
               throw error;
           }else {
               //插入成功
               console.log(result);
               //入库成功后，查询数据库中的内容
               connection.query('select * from users', (error, result) => {
                  if (error){
                      console.log('select error occured: ' + error);
                      throw error;
                  } else {
                      console.log(result);
                      //查询成功后，关闭数据库连接
                      connection.end((error) => {
                         if (error) {
                             console.log('end error occured: ' + error);
                             throw error;
                         }
                      });
                  }
               });
           }
       });


   }
});