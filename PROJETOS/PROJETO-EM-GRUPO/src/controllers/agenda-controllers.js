const agenda = require('../models/agenda-models')
const helper = require('../helpers/agenda-helpers')

const obterContato = (req, res) =>{
    res.status(200).json(agenda)
}

const obterPorNome = (req, res) =>{
    const { nome } = req.query;

    res.status(200).send(agenda.find(contato=> contato.telefone == nome))
}

const obterPorTelefone = (res, res) =>{
    const { telefone } = req.query;
    res.status(200).send(agenda.find(contato=> contato.telefone == telefone))

}

const cadastrarContato = (res, res) => {
    const { nome, telefone,email, outrosTelefones}
}