const initialState = {
  folders: []
};

const FoldersReducer = (state = initialState, action) => {
  let nextState;
  console.log(action);
  switch (action.type) {
    case "ADD_FOLDER":
      nextState = {
        ...state,
        folders: [...state.folders, action.value],
      };
      console.log("After" + nextState);
      return nextState;
    case "DELETE_FOLDER":
      nextState = {
        ...state,
        users: [...state.users, action.value],
      };
      return nextState;
    default:
      return state;
  }
};

export default FoldersReducer;
