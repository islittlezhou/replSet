
const mongoose =require('mongoose');

var opts = {
    poolSize: 5 ,
    auto_reconnect: true,
    replset: { rs_name: 'myblog' },
    useNewUrlParser: true
}
const db = mongoose.createConnection('mongodb://localhost:27998/test1', opts);

db.on('error', (err) => {
    console.log('mongodb://localhost:27998/test连接失败');
    console.log(err);
})

db.on('open', () => {
    console.log('mongodb://localhost:27998/test连接陈宫');

});

module.exports = db;