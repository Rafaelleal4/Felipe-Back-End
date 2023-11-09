import  express  from "express";
import {config} from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.delete("/", (req, res) => {
    res.status(200).json({message: `Hello, DELETE!`})
});
app.put("/", (req, res) => {
    res.status(200).json({message: `Hello, PUT!`})
});
app.get("/:nome/:sobrenome", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    res.status(200).json({message: `Hello, GET! My name is ${nome}! and my lastname is ${sobrenome}` })
});
app.post("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    res.status(200).json({nome: nome , sobrenome: sobrenome , idade: idade})
});
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
});