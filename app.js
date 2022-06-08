const   express = require('express')
const app = express()
//app.use(express.static('pages'))
app.set('view engine','ejs')
app.get('/', function(req,res){

res.render('pages/index')

})
app.get('/about', function(req,res){

    res.render('pages/about')
})

app.listen(3001,function()
{
    console.log('listening on port 3001')
})
