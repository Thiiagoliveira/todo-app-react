    
const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
/* 
    validar o update:
    1. Mostra a resposta atualizada e não o antiga;
    2. Não valida as atualizações, então precisamos colocar runValidators;
*/
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo