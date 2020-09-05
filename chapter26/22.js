export const write = async ctx => {
    (…)
    const post = new Post({
      title,
      body: sanitizeHtml(body, sanitizeOption),
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