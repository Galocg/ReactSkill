import React, { useRef, useEffect } from ‘react‘;
import Quill from ‘quill‘;
import ‘quill/dist/quill.bubble.css‘;
import styled from ‘styled-components‘;
import palette from ‘../../lib/styles/palette‘;
(…)


const Editor = ({ title, body, onChangeField }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정



useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: ‘bubble‘,
      placeholder: ‘내용을 작성하세요…’,
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: ‘1‘ }, { header: ‘2‘ }],
          [‘bold‘, ‘italic‘, ‘underline‘, ‘strike‘],
          [{ list: ‘ordered‘ }, { list: ‘bullet‘ }],
          [‘blockquote‘, ‘code-block‘, ‘link‘, ‘image‘],
        ],
      },
    });



    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on(‘text-change‘, (delta, oldDelta, source) => {
      if (source = = = ‘user‘) {
        onChangeField({ key: ‘body‘, value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);



  const onChangeTitle = e => {
    onChangeField({ key: ‘title‘, value: e.target.value });
  };



return (
    <EditorBlock>
      <TitleInput
        placeholder=“제목을 입력하세요“
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};



export default Editor;