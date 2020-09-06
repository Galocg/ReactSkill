(…)
const PostViewer = ({ post, error, loading, actionButtons }) => {
  (…)
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ _ _html: body }} />
    </PostViewerBlock>
  );
};


export default PostViewer;