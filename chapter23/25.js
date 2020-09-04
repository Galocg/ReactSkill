/
  GET /api/posts?username=&tag=&page=
/
export const list = async ctx => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || ‘1‘, 10);


if (page < 1) {
    ctx.status = 400;
    return;
  }



const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    …(username ? { ‘user.username‘: username } : {}),
    …(tag ? { tags: tag } : {}),
  };



try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set(‘Last-Page‘, Math.ceil(postCount / 10));
    ctx.body = posts.map(post => ({
      …post,
      body:
        post.body.length < 200 ? post.body : </span><span class="co49">${</span><span class="co34">post</span><span class="co31">.</span><span class="co34">body</span><span class="co31">.</span><span class="co47">slice</span><span class="co33">(</span><span class="co32">0</span><span class="co33">,</span> <span class="co32">200</span><span class="co33">)</span><span class="co49">}</span><span class="co31">...,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};