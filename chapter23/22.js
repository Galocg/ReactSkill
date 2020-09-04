export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
      ctx.status = 400; // Bad Request
      return;
    }
    try {
      const post = await Post.findById(id);
      // 포스트가 존재하지 않을 때
      if (!post) {
        ctx.status = 404; // Not Found
        return;
      }
      ctx.state.post = post;
      return next();
    } catch (e) {
      ctx.throw(500, e);
    }
  };