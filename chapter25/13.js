import React from ‘react‘;
import WriteActionButtons from ‘../components/write/WriteActionButtons‘;
import Responsive from ‘../components/common/Responsive‘;
import EditorContainer from ‘../containers/write/EditorContainer‘;
import TagBoxContainer from ‘../containers/write/TagBoxContainer‘;


const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};



export default WritePage;