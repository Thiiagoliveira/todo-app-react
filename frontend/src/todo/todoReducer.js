const INITIAL_STATE = {
  description: "Ler Livro",
  list: [
    {
      _id: 1,
      description: "estudar para prova Direito constitucional hoje",
      done: true
    },
    {
      _id: 2,
      description: "estudar redux quinta a noite",
      done: false
    },
    {
      _id: 3,
      description: "estudar para prova matematica discreta amanhã",
      done: true
    }]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    case "TODO_SEARCHED":
      return { ...state, list: action.payload.data };
      case "TODO_ADDED":
      return { ...state };
    default:
      return state;
  }
};
