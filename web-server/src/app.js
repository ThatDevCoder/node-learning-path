const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req,res) => {
    res.render('index',{
        title: 'Wather app',
        name: ' HomePage'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        about_me_prop: 'This is Dev B',
        desc: 'carry OP',
        name: 'About Page'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title_prop:'Help GG',
        body_prop: 'This is body prop',
        name: 'Help Page'
    })
})


app.get('/weather', (req,res) => {
    res.send([{
        forecast : {
            temperature: '45 C',
            windspeed : '90 Kmph' 
        }        
    }, {
        location : 'Mumbai'
    }])
})

app.get('/help/*',(req,res) => {
    res.send('<h1>Help article not found</h1>')
})

app.get('*',(req,res) => {
    res.render('default')
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
    
})