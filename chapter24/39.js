import { call, put } from ‘redux-saga/effects‘;
import { startLoading, finishLoading } from ‘../modules/loading‘;


export const createRequestActionTypes = type => {
  const SUCCESS = </span><span class="co49">${</span><span class="cd2 co33">type</span><span class="co33">}</span><span class="cd2 co31">_SUCCESS;
  const FAILURE = </span><span class="co49">${</span><span class="cd2 co33">type</span><span class="co33">}</span><span class="cd2 co31">_FAILURE;
  return [type, SUCCESS, FAILURE];
};



export default function createRequestSaga(type, request) {
  (…)
}