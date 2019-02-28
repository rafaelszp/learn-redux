function postComments(state=[],action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('U shall remove comment')
      return state;
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