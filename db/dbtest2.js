
const mongoose =require('mongoose');
var opts = {
    poolSize: 5 ,
    auto_reconnect: true,
    replset: { rs_name: 'myblog' },
    useNewUrlParser: true
}
const db = mongoose.createConnection('mongodb://localhost:27997/test1', opts);

db.on('error', (err) => {
    console.log('test1连接失败');
    console.log(err);
})

db.on('open', () => {
    console.log('test1连接陈宫');

});

module.exports = db;