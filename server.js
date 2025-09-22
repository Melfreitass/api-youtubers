import express from "express";
import dotenv from "dotenv";
import youtubersRoutes from "./src/routes/youtubersRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor Funcionando")
});

app.use("/youtubers", youtubersRoutes)

app.listen(serverPort, () => {
    console.log(`Servidor rodando em http://localhost:${serverPort}`)
})

