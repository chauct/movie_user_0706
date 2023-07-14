import { produce } from 'immer';
import { SET_MOVIES } from './action';
const initialState = {
  movies: null,
};

// tiếp nhận action, chỉnh sửa state hiện tại  và return về một state mới
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      const nextState = produce(state, (draft) => {
        draft.movies = action.payload;
      });
      return nextState;

    default:
      return state;
  }
};
export default reducer;
