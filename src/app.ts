import * as express from "express";
import * as process from "process";
import * as path from "path";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.get("/about", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../views", "about.html");
    res.sendFile(htmlFilePath);
});

app.get("/confirm", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../views", "confirm.html");
    res.sendFile(htmlFilePath);
});

app.get("/", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../views", "index.html");
    res.sendFile(htmlFilePath);
});

app.get("/recommend", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../views", "recommend.html");
    res.sendFile(htmlFilePath);
});

app.get("/restaurants", (req, res) => {
    const htmlFilePath = path.join(__dirname, "../views", "restaurants.html");
    res.sendFile(htmlFilePath);
});
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});