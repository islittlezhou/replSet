const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const url = require('url');
const mongoose = require('mongoose');

const student = require('./db/db1');
const teacher = require('./db/db2');
const c27998_test1_teachers = require('./model/27998_test1_teachers');

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    rolling: true
}))

var opts = {
    poolSize: 5 ,
    auto_reconnect: true,
    replset: { rs_name: 'myblog' },
    useNewUrlParser: true
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/upload', express.static('upload'));


app.get('/', (req, res) => {
    res.send('访问到了');
})


app.get('/get', (req, res) => {

    student.create({name: '张学友', age: 40, love:'打篮球', sex:'男', count:1}, (err, result) => {
        if( err ){
            console.log(err);
            return
        }
        console.log(result);
    });

    res.send('fffffffffffffffff');
})


app.get('/addTeacher', (req, res) => {
    teacher.create({name: '梁启超', workTime:10, love:'赌博', sex:'男', types:'数学老师'}, (err, result) => {
        if( err ){
            console.log(err);
            return
        }
        console.log(result);
    });
    res.send('fsdfds')
})

app.get('/get27998teachers', (req, res) => {
    c27998_test1_teachers.find({}, (err, result) => {
        if(err){
            return res.send('系统错误')
        }

        res.send(result)

    });
})

//这一个将产生默认链接
mongoose.connect('mongodb://localhost:27996,localhost:27997,localhost:27998/test', opts);

const db = mongoose.connection;

db.on('error', (e) => {
    console.log('数据库test连接失败');
    console.log(e);
});

db.on('open', () => {
    console.log('数据库test连接成功');
    app.listen(8909);
})
// app.listen(8909);
