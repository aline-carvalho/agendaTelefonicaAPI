const express = require('express');
const agendaController = require('../controllers/agenda-controllers');
const { route } = require('../app');
const router = express.Router();

router.get('/agenda', agendaController.obterContatos);

router.get('/agenda', agendaController.obterNome);