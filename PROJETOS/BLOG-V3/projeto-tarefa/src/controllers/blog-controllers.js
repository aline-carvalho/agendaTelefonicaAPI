const blogModel = require('../models/blog-models');
const helper = require('../helper/helpers');

//GET para verificar
const obterTarefaBlog = (requisicao, resposta) =>{
  resposta.status(200).json(blogModel);
  }
  
//Post para adicionar uma nova postagem
const criarBlog = (requisicao, resposta) =>{  
  let { titulo, conteudo, etiqueta,} = requisicao.body;
  let novoPost ={
  //utilizando o helper
  id: helper.obterNovoValor(blogModel),
  dataCriacao: helper.novaData(blogModel),
  titulo: titulo,
  conteudo: conteudo, 
  etiqueta: etiqueta, 
       
     }
  
  blogModel.push(novoPost);
  
  resposta.status(201).json(novoPost);
   }

   //DELETE para remover uma postagem feita pelo POST
  const deletarBlog = (requisicao, resposta) =>{
  const { id } = requisicao.params;
 
  blogModel.filter(tarefa => tarefa.id != id);
 
  resposta.json({ mensagem: "Blog deletado com sucesso!"})
  }

  module.exports ={
    obterTarefaBlog,
    criarBlog,
    deletarBlog,
    
  }
    