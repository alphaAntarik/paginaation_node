const express = require('express')
const bodyParser = require('body-parser')
const {user_db} = require('./utils/database')
const router = require('./routes/userRoutes')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/user', router);
user_db((client) => {
    // console.log(client);
    app.listen(3000, () => {
        console.log('server is listening to ' + 3000);
    
    })
})
