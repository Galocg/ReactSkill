export const write = async ctx => {
    (…)
  
  
  const { title, body, tags } = ctx.request.body;
    const post = new Post({
      title,
      body,
      tags,
      user: ctx.state.user,
    });
    try {
      await post.save();
      ctx.body = post;
    } catch (e) {
      ctx.throw(500, e);
    }
  };
  
  