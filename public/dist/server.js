var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/views", express.static(__dirname + '/views'));

app.get('/getcars', function (req, res) {
    var cars = [{"title":"Mercedes","id":1,"price":10000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Audi","id":2,"price":8000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Renault","id":3,"price":5000,"popularity":5,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Bmw","id":5,"price":12000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Honda","id":7,"price":4000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Toyota","id":9,"price":4500,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Alfa Romeo","id":10,"price":4500,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Nissan","id":11,"price":5000,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Peugeot","id":12,"price":5000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];
    res.send(cars);
});

app.post('/sendcars', function (req, res) {
    console.log(req.body);
    res.send("sended");
});

app.get('*', function (req, res) {
    // var cars = [{"title":"Mercedes","id":1,"price":10000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Audi","id":2,"price":8000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Renault","id":3,"price":5000,"popularity":5,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Bmw","id":5,"price":12000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Honda","id":7,"price":4000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Toyota","id":9,"price":4500,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Alfa Romeo","id":10,"price":4500,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Nissan","id":11,"price":5000,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Peugeot","id":12,"price":5000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];
    res.sendFile('index.html' , { root : __dirname});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
