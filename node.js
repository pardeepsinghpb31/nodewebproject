let express = require(`express`);
let app = express();
let fs = require(`fs`);
let path = require(`path`);
let hbs = require(`hbs`);
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, `/template`)));
app.set("view engine", "hbs");
app.set(`views`, path.join(__dirname, `/template/views`));
hbs.registerPartials(path.join(__dirname, `/template/prasial`));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.get(`/`, (req, res) => {
    res.render(`home`);
});
app.post(`/`, (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
      
    var result = num1 + num2 ;
      
    res.send("Addition - " + result);
})
app.get(`/about`, (req, res) => {
    res.render(`about`);
});
app.get(`*`, (req, res) => {
    res.render(`404`);
});
app.listen(700, () => {
    console.log(`server listen on 700 port`);
});