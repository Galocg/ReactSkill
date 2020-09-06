(…)
const SET_ORIGINAL_POST = ‘write/SET_ORIGINAL_POST‘;


(…)
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);



// 사가 생성
(…)



const initialState = {
  title: “,
  body: “,
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};



const write = handleActions(
  {
    (…)
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      …state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
  },
  initialState,
);



export default write;