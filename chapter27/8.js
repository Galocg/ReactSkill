import { createAction, handleActions } from ‘redux-actions‘;
import createRequestSaga, {
  createRequestActionTypes,
} from ‘../lib/createRequestSaga‘;
import * as postsAPI from ‘../lib/api/posts‘;
import { takeLatest } from ‘redux-saga/effects‘;


(…)
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes(‘write/UPDATE_POST‘); // 포스트 수정



(…)
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);



// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);



export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}



(…)



const write = handleActions(
  {
    (…)
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      …state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      …state,
      postError,
    }),
  },
  initialState,
);



export default write;