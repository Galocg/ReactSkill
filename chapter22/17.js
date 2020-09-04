export const list = async ctx => {
    try {
      const posts = await Post.find().exec();
      ctx.body = posts;
    } catch (e) {
      ctx.throw(500, e);
    }
  };