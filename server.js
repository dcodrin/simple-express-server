var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Ham"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "More Bacon"
    },
    {
        "id": "ppo2g5",
        "text": "Even More Bacon!"
    },
    {
        "id": "spo2r5",
        "text": "More Ham!"
    }
];


app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    //Just to show how seamless data changes we will change and existing ingredient when a post is made.
    ingredients[0].text = "This was changed when the post was successful! Cool!";
    res.status(200).send("Successfully posted ingredient");
});

app.listen(6060);
