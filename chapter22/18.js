export const read = async ctx => {
    const { id } = ctx.params;
    try {
      const post = await Post.findById(id).exec();
      if (!post) {
        ctx.status = 404; // Not Found
        return;
      }
      ctx.body = post;
    } catch (e) {
      ctx.throw(500, e);
    }
  };