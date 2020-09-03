(…)
import { END } from ‘redux-saga‘;


(…)



// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.



const context = {};
  const sagaMiddleware = createSagaMiddleware();



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );



const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();



const preloadContext = {
    done: false,
    promises: []
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );



ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 한번 렌더링합니다.
  store.dispatch(END); // redux-saga의 END 액션을 발생시키면 액션을 모니터링하는 사가들이 모두 종료됩니다.
  try {
    await sagaPromise; // 기존에 진행 중이던 사가들이 모두 끝날 때까지 기다립니다.
    await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
  // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 <를 치환 처리
  // https://redux.js.org/recipes/server-rendering#security-considerations
  const stateString = JSON.stringify(store.getState()).replace(/</g, ‘\u003c‘);
  const stateScript = &lt;script&gt;_ _PRELOADED_STATE_ _ = </span><span class="co49">${</span><span class="co33">stateString</span><span class="co49">}</span><span class="co31">&lt;/script&gt;; // 리덕스 초기 상태를 스크립트로 주입합니다.



res.send(createPage(root, stateScript)); // 결과물을 응답합니다.
};
(…)