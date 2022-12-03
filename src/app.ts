import * as express from "express";
import * as process from "process";
import * as path from "path";
import * as fs from "fs";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

const filePath = path.join(__dirname, "..", "data", "restaurants.json");
const fileData = fs.readFileSync(filePath).toString();
const storedRestaurants = JSON.parse(fileData);

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/confirm", (req, res) => {
    res.render("confirm");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/recommend", (req, res) => {
    res.render("recommend");
});

app.post("/recommend", (req, res) => {
    const restaurant = req.body;
    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
    res.redirect("/confirm");
});

app.get("/restaurants", (req, res) => {
    res.render("restaurants", {
        numberOfRestaurant: storedRestaurants.length
    });
});
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});