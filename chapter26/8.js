import React from ‘react‘;
import styled, { css } from ‘styled-components‘;
import { Link } from ‘react-router-dom‘;
import palette from ‘../../lib/styles/palette‘;


const SubInfoBlock = styled.div</span>
  <span class="co49">${</span><span class="co33">props</span> <span class="co46">=&gt;</span>
    <span class="co34">props</span><span class="co33">.</span><span class="co34">hasMarginTop</span> <span class="co35">&amp;&amp;</span>
    <span class="co47">css</span><span class="co31">
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};



/* span 사이에 가운뎃점 문자 보여 주기 /
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: ‘\B7‘; / 가운뎃점 문자 */
  }
`;



const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={/@</span><span class="co49">${</span><span class="co33">username</span><span class="co49">}</span><span class="co31">}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};



export default SubInfo;