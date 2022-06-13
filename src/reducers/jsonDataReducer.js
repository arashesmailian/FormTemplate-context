export const jsonDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return state.map((question) => {
        if (question.id === action.payload.id)
          return { ...question, value: action.payload.value };
        else return question;
      });

    default:
      return state;
  }
};
