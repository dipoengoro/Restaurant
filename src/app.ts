import * as express from "express";
import * as process from "process";
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
   res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});