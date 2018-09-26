const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')

bodyParser = require('body-parser');

// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', userRouter)

app.listen(12345, () => console.log('Example app listening on port 12345!'))