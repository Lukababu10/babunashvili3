const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
let username=""

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/profile', (req, res) => {
    res.render('profile.ejs', { username: username})
})

app.post('/submit', (req, res) => {
    console.log(req.body)
    username=req.body.name
    res.render('profile.ejs', { username: username})

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})