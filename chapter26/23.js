export const update = async ctx => {
    (…)
  
  
  const nextData = { …ctx.request.body }; // 객체를 복사하고
    // body 값이 주어졌으면 HTML 필터링
    if (nextData.body) {
      nextData.body = sanitizeHtml(nextData.body);
    }
    try {
      const post = await Post.findByIdAndUpdate(id, nextData, {
        new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
        // false일 때는 업데이트되기 전의 데이터를 반환합니다.
      }).exec();
      if (!post) {
        ctx.status = 404;
        return;
      }
      ctx.body = post;
    } catch (e) {
      ctx.throw(500, e);
    }
  };