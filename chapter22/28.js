export const list = async ctx => {
    try {
      const posts = await Post.find()
        .sort({ _id: -1 })
        .limit(10)
        .exec();
      ctx.body = posts;
    } catch (e) {
      ctx.throw(500, e);
    }
  };