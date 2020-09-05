import React, { useEffect } from ‘react‘;
import WriteActionButtons from ‘../../components/write/WriteActionButtons‘;
import { useSelector, useDispatch } from ‘react-redux‘;
import { withRouter } from ‘react-router-dom‘;
import { writePost } from ‘../../modules/write‘;


const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));



// 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };



// 취소
  const onCancel = () => {
    history.goBack();
  };



// 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(/@</span><span class="co49">${</span><span class="co34">user</span><span class="co31">.</span><span class="co34">username</span><span class="co49">}</span><span class="co31">/</span><span class="co49">${</span><span class="co33">_id</span><span class="co49">}</span><span class="co31">);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};



export default withRouter(WriteActionButtonsContainer);