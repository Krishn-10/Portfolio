let express = require("express");
// console.log(express);
let app = express();
let port = 3000;

app.listen(port, () => {
 console.log("App is listening");
})

app.get("/portfolio", (req, res) => {
 res.send("This is portfolio page");
});
app.get("/", (req, res) => {
 res.send("This is home page");
});