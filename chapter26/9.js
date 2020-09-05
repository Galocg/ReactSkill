import React from ‘react‘;
import styled from ‘styled-components‘;
import Responsive from ‘../common/Responsive‘;
import Button from ‘../common/Button‘;
import palette from ‘../../lib/styles/palette‘;
import SubInfo from ‘../common/SubInfo‘;
import Tags from ‘../common/Tags‘;


(…)



const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>제목</h2>
      <SubInfo username=“username“ publishedDate={new Date()} />
      <Tags tags={[‘태그1’, ‘태그2’, ‘태그3’]} />
      <p>포스트 내용의 일부분..</p>
    </PostItemBlock>
  );
};



(…)