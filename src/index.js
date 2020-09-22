const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const handlebars  = require('express-handlebars');
const morgan = require('morgan')

const routes = require('./routes')

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) //middleware FORm
app.use(express.json()); //middleware JS

//thư viện submit của js: XMLHttpRequest, fetch, axios...

//route
//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

routes(app);

// app.get('/', (req, res) => {

//     res.render('home');
// })
// app.get('/news', (req, res) => {

//     res.render('news');
// })
// app.get('/search', (req, res) => {

//     res.render('search');
// })
// app.post('/search', (req, res) => {
//     console.log(req.body) // lấy object bao gồm các thông tin gửi đi. { q: 'meraki', gender: 'nu' }
//     res.send('');
// })

//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})