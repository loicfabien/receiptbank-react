import ReceiptsReducer from "./ReceiptsReducer";
import FoldersReducer from "./FoldersReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ReceiptsReducer,
  FoldersReducer
});

export default allReducers;
