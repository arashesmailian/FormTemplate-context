 export const jsonDataReducer = ( state , action ) => {
  switch(action.type) {
    case 'UPDATE':
      return [...state , {
        value: action.jsonData.payload,
      }]
      default:
        return state
  }
}

