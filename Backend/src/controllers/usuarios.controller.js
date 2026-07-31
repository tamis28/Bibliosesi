const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.usuarios.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.usuarios.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.usuarios.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.usuarios.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.usuarios.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const login = async (req, res) => {
    const {email, senha} = req.body;

    //consultar banco com prisma

    //prisma retorna usuario
    /*
        {
            nome: "",
            senha: "",
            tipo: ""
        }
    */

    // const token = jwt.sign({
    //     nome,
    //     tipo
    // }, process.env.TOKEN_KEY);

    res.json({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiZnVsYW5vIiwidGlwbyI6IlVTRVIifQ.lhhE8oj-hUchYVCZgu61am_SwSIlgUt0Bvzg-lmtjw0"})
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
    login
}
