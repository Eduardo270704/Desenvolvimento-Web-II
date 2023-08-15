import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}...`);
});
app.get("/texto/", (req, res) => {
    const { nome, indice } = req.body;
    const yy = parseInt(indice);
    res.send(`{\n   letra: ${nome[yy]}\n}`);
});