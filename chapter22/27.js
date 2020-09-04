export const list = async ctx => {
    try {
      const posts = await Post.find()
        .sort({ _id: -1 })
        .exec();
      ctx.body = posts;
    } catch (e) {
      ctx.throw(500, e);
    }
  };