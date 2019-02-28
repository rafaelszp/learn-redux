function postComments(state=[],action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i+1),
      ];
    default: return state;
  }
}

function comments(state=[],action){
  if(action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId],action) //reducer compositon
    }
  }
  return state;
}

export default comments;