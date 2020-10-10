const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog-controllers');

//route POST tarefas
//desc Criar uma tarefa
//access Public 
//endpoint http://localhost:porta/blog

//router.get('/todas', blogsController.checkPosts);

//route POST postagens
//desc Criar uma nova postagem no blog
//access Public 
//endpoint http://localhost:porta/todas/criar


router.post('/blog', blogController.criarBlog);

//route DELETE tarefas
//desc Deletar uma tarefa pelo seu identificador
//access Public 
//endpoint http://localhost:porta/blog/:id

router.delete('/blog/:id', blogController.deletarBlog)

module.exports = router;

