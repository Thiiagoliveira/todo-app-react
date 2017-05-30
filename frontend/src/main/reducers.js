import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'estudar para prova Direito constitucional hoje',
            done: true
        },{
            _id: 2,
            description: 'estudar redux quinta a noite',
            done: false
        },{
            _id: 3,
            description: 'estudar para prova matematica discreta amanhã',
            done: true
        }]
    })
})

export default rootReducer