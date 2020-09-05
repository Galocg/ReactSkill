import React, { useState, useCallback, useEffect } from ‘react‘;
import styled from ‘styled-components‘;
import palette from ‘../../lib/styles/palette‘;


(…)



const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState(“);
  const [localTags, setLocalTags] = useState([]);



const insertTag = useCallback(
    tag => {
      if (!tag) return; // 공백이라면 추가하지 않음 
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      const nextTags = […localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );



const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t != = tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );



const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);



const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(“); // input 초기화
    },
    [input, insertTag],
  );



  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);



return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder=“태그를 입력하세요“
          value={input}
          onChange={onChange}
        />
        <button type=“submit“>추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};



export default TagBox;