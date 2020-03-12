var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

//Static files
app.use('/static', express.static('public'));
app.use('/', express.static('public'));

app.set('port', process.argv[2]);

// Set mysql
app.set('mysql', mysql);

app.get('/',function(req,res){
  res.render('index')
});

app.use('/classes', require('./classes.js'));

app.use('/search', require('./search.js'));

app.use('/admin', require('./admin.js'));

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});