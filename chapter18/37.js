import { createAction, handleActions } from ‘redux-actions‘;
import { delay, put, takeEvery, takeLatest, select } from ‘redux-saga/effects‘;


(…)



function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // 특정 액션을 디스패치합니다.
  const number = yield select(state => state.counter); // state는 스토어 상태를 의미함
  console.log(</span><span class="co31">현재</span> <span class="co31">값은</span> <span class="co49">${</span><span class="co33">number</span><span class="co49">}</span><span class="co31">입니다</span><span class="co31">.</span><span class="co31">);
}



(…)