(…)
const render = () => {
  const state = store.getState(); // 현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add(‘active‘);
  } else {
    divToggle.classList.remove(‘active‘);
  }
  // 카운터 처리
  counter.innerText = state.counter;
};


render();
store.subscribe(render);