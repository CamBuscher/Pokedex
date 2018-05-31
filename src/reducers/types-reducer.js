const typesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKE_TYPES': 
      return [...action.types]
    default:
      return state;
  }
};

export default typesReducer